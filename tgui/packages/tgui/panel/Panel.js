import { toFixed } from 'common/math';
import { Component, createRef } from 'inferno';
import { loadCSS } from '../assets';
import { Button, Flex, Input, LabeledList, NumberInput, Section } from '../components';
import { Window } from '../layouts';
import { logger } from '../logging';
import { chat } from './chat';

export class Panel extends Component {
  constructor() {
    super();
    this.chatRef = createRef();
    this.state = {
      lineHeight: 1.1,
    };
    this.setLineHeight = lineHeight => this.setState({ lineHeight });
  }

  componentDidMount() {
    logger.log('panel mounted');
    loadCSS('browserOutput.css');
    if (chat.rootElement) {
      this.chatRef.current.append(chat.rootElement);
    }
    else {
      chat.rootElement = this.chatRef.current;
    }
  }

  render() {
    const {
      lineHeight,
    } = this.state;
    return (
      <Window
        title="Panel"
        width={400}
        height={600}
        resizable>
        <Flex
          direction="column"
          height="100%">
          <Flex.Item m={1} mb={0}>
            <Section title="Settings">
              <LabeledList>
                <LabeledList.Item label="Line height">
                  <NumberInput
                    step={0.01}
                    stepPixelSize={2}
                    minValue={1}
                    maxValue={4}
                    value={lineHeight}
                    format={value => toFixed(value, 2)}
                    onDrag={(e, value) => this.setLineHeight(value)} />
                </LabeledList.Item>
              </LabeledList>
            </Section>
          </Flex.Item>
          <Flex.Item
            position="relative"
            m={1}
            grow={1}
            basis={0}>
            <Section fill overflowY="scroll">
              <div
                ref={this.chatRef}
                style={{
                  'line-height': lineHeight,
                }} />
            </Section>
            <Button
              position="absolute"
              top={1}
              right={2}
              style={{
                'box-shadow': '0 0 16px #000',
              }}
              icon="cog" />
          </Flex.Item>
          <Flex.Item
            m={1}
            mt={0}>
            <Input
              fluid
              placeholder="Message..." />
          </Flex.Item>
        </Flex>
      </Window>
    );
  }
}
