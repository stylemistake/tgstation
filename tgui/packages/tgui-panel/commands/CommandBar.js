/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */

import { Component, createRef } from 'inferno';
import { Button, Flex } from 'tgui/components';
import { logger } from 'tgui/logging';
import { KEY_BACKSPACE, KEY_ENTER, KEY_UP, KEY_TAB, KEY_ESCAPE } from 'common/keycodes';
import { focusMap } from 'tgui/focus';
import { classes } from 'common/react';

const VERBS = [
  {
    name: 'Say',
    text: 'say',
  },
  {
    name: 'OOC',
    text: 'ooc',
    color: 'yellow',
  },
  {
    name: 'Me',
    text: 'me',
    color: 'teal',
  },
];

const STICKY_VERBS = VERBS;
const STICKY_SAY_MACROS = [
  {
    name: 'Common',
    text: ';',
    color: 'green',
  },
  {
    name: 'Command',
    text: ':c',
    color: 'yellow',
  },
  {
    name: 'Emote',
    text: '*',
    space: false,
    color: 'teal',
  },
];

/**
 * @param {object[]} segments
 * @param {string} text
 * @return {object[]}
 */
const textToSegments = (segments, text) => {
  // Search for a sticky verb
  if (segments.length === 0) {
    const lcText = text.toLowerCase();
    const stickyVerb = STICKY_VERBS.find(verb => (
      lcText.startsWith(verb.text + ' ')
    ));
    if (stickyVerb) {
      text = text.substr(stickyVerb.text.length).trim();
      segments = [stickyVerb];
    }
  }
  // Search for a sticky macro
  if (segments.length === 1) {
    const lcText = text.toLowerCase();
    const stickyVerb = segments[0];
    if (stickyVerb.name === 'Say') {
      const stickyMacro = STICKY_SAY_MACROS.find(macro => (
        lcText.startsWith(macro.text)
      ));
      if (stickyMacro) {
        text = text.substr(stickyMacro.text.length).trim();
        segments = [...segments, stickyMacro];
      }
    }
  }
  return [segments, text];
};

const segmentsToText = (segments, text) => {
  let segment;
  segments = [...segments];
  // eslint-disable-next-line no-cond-assign
  while (segment = segments.pop()) {
    text = segment.text
      + (segment.space === false ? '' : ' ')
      + text;
  }
  logger.log(text);
  return text;
};

export class CommandBar extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
    this.state = {
      focused: false,
      previous: null,
      segments: [],
    };
    this.handleKeyDown = e => {
      const segments = this.state.segments;
      const value = e.target.value;
      const keyCode = e.keyCode;
      if (keyCode === KEY_BACKSPACE && value.length === 0) {
        this.setState(prevState => ({
          segments: prevState.segments
            .slice(0, prevState.segments.length - 1),
        }));
        return;
      }
      if (keyCode === KEY_UP) {
        const { previous } = this.state;
        e.target.value = previous.value;
        this.setState({
          segments: previous.segments,
        });
        return;
      }
      if (keyCode === KEY_ENTER) {
        e.preventDefault();
        e.target.value = '';
        this.setState(prevState => ({
          previous: {
            segments: prevState.segments,
            value,
          },
        }));
        const command = segmentsToText(segments, value);
        Byond.command(command);
        return;
      }
      if (keyCode === KEY_TAB) {
        e.preventDefault();
        return;
      }
      if (keyCode === KEY_ESCAPE) {
        e.preventDefault();
        focusMap();
        return;
      }
    };
    this.handleInput = e => {
      const value = e.target.value;
      const [segments, text] = textToSegments(this.state.segments, value);
      logger.log({ value, text, segments });
      // Update with a new value
      if (segments !== this.state.segments) {
        e.preventDefault();
        e.target.value = text;
        this.setState({ segments });
      }
    };
    this.handleFocus = e => {
      this.setState({ focused: true });
    };
    this.handleBlur = e => {
      this.setState({ focused: false });
    };
  }

  componentDidMount() {
    /** @type {HTMLInputElement} */
    const inputNode = this.inputRef.current;
    inputNode.addEventListener('keydown', this.handleKeyDown);
    inputNode.addEventListener('input', this.handleInput);
    inputNode.addEventListener('focus', this.handleFocus);
    inputNode.addEventListener('blur', this.handleBlur);
  }

  componentWillUnmount() {
    /** @type {HTMLInputElement} */
    const inputNode = this.inputRef.current;
    inputNode.removeEventListener('keydown', this.handleKeyDown);
    inputNode.removeEventListener('input', this.handleInput);
    inputNode.removeEventListener('focus', this.handleFocus);
    inputNode.removeEventListener('blur', this.handleBlur);
  }

  render() {
    const { focused, segments } = this.state;
    return (
      <Flex
        className={classes([
          'CommandBar',
          focused && 'CommandBar--focused',
        ])}
        align="center">
        {segments.map((segment, i) => (
          <Flex.Item key={i} m={0.5}>
            <Button color={segment.color || 'grey'}>
              {segment.name}
            </Button>
          </Flex.Item>
        ))}
        <Flex.Item m={0.5} grow={1}>
          <input
            ref={this.inputRef}
            className="CommandBar__input" />
        </Flex.Item>
      </Flex>
    );
  }
}
