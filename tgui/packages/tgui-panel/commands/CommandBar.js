import { Box, Flex, Button } from 'tgui/components';

export const CommandBar = (props, context) => {
  return (
    <Flex
      align="center"
      style={{
        background: '#000',
        border: '1px solid #8ae',
        color: '#fff',
      }}>
      <Flex.Item m={0.5}>
        <Button color="yellow">OOC</Button>
      </Flex.Item>
      <Flex.Item m={0.5} grow={1}>
        <Box
          as="input"
          value=">"
          style={{
            display: 'block',
            width: '100%',
            margin: 0,
            padding: 0,
            'font-size': 'inherit',
            'line-height': '1.5em',
            background: '#000',
            border: 0,
            color: '#fff',
          }} />
      </Flex.Item>
    </Flex>
  );
};
