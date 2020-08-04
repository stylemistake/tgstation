/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { createLogger } from 'common/logging.js';
import { sleep } from 'common/timer.js';
import fs from 'fs';
import { createRequire } from 'module';
import { promisify } from 'util';
import webpack from 'webpack';
import { loadSourceMaps, setupLink } from './link/server.js';
import { reloadByondCache } from './reloader.js';
import { resolveGlob } from './util.js';

const logger = createLogger('webpack');

export const getWebpackConfig = async options => {
  const require = createRequire(import.meta.url);
  const createConfig = await require('../tgui/webpack.config.js');
  return createConfig({}, options);
};

export const setupWebpack = async config => {
  let buildIsReady = false;
  logger.log('setting up');
  const bundleDir = config.output.path;
  // Setup link
  const link = setupLink();
  // Instantiate the compiler
  const compiler = webpack(config);
  // Clear garbage before compiling
  compiler.hooks.watchRun.tapPromise('tgui-dev-server', async () => {
    const files = await resolveGlob(bundleDir, './*.hot-update.*');
    logger.log(`clearing garbage (${files.length} files)`);
    for (let file of files) {
      await promisify(fs.unlink)(file);
    }
    logger.log('compiling');
  });
  // Start reloading when it's finished
  compiler.hooks.done.tap('tgui-dev-server', async stats => {
    // Load source maps
    await loadSourceMaps(bundleDir);
    // Reload cache
    await reloadByondCache(bundleDir);
    // Ready to reload clients
    buildIsReady = true;
    // Notify all clients that update has happened
    link.broadcastMessage({
      type: 'hotUpdate',
    });
  });
  // Subscribe to hot update requests
  link.subscribe(async (ws, msg) => {
    const { type, payload } = msg;
    if (type === 'hotUpdate/request' && buildIsReady) {
      // Sleep for a second to let the BYOND cache finish loading
      await sleep(1000);
      // Reload cache
      await reloadByondCache(bundleDir);
      // Notify the client
      link.sendMessage(ws, {
        type: 'hotUpdate',
      });
    }
  });
  // Start watching
  logger.log('watching for changes');
  compiler.watch({}, (err, stats) => {
    if (err) {
      logger.error('compilation error', err);
      return;
    }
    stats
      .toString(config.devServer.stats)
      .split('\n')
      .forEach(line => logger.log(line));
  });
};
