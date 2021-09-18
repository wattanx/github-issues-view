import { Box, Center, CheckIcon } from './common';

export const OpenedStatus: React.VFC = () => {
  return (
    <Center
      width="15px"
      height="15px"
      rounded="full"
      borderColor="#1A7F37"
      borderWidth="1px"
      backgroundColor="#fff"
    >
      <Box width="5px" height="5px" rounded="full" backgroundColor="#1A7F37" />
    </Center>
  );
};

export const ClosedStatus: React.VFC = () => (
  <Center
    width="15px"
    height="15px"
    rounded="full"
    borderColor="#cf222e"
    borderWidth="1px"
    backgroundColor="#fff"
  >
    <CheckIcon width="8px" height="8px" color="#cf222e" />
  </Center>
);
