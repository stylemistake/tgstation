/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { useCommands } from './hooks';
import { Section, Button } from 'tgui/components';

export const Verbs = (props, context) => {
  const { verbs } = useCommands(context);
  return (
    <Section scrollable maxHeight={16}>
      {verbs.map(verb => (
        <Button key={verb.name}>
          {verb.name}
        </Button>
      ))}
    </Section>
  );
};
