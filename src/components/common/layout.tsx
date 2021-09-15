import {
  Box as ChakraBox,
  BoxProps as ChakraBoxProps,
  Center as ChakraCenter,
  CenterProps as ChakraCenterProps,
  Stack as ChakraStack,
  StackProps as ChakraStackProps,
  Flex as ChakraFlex,
  FlexProps as ChakraFlexProps,
  HStack as ChakraHStack,
} from '@chakra-ui/react';

export type BoxProps = ChakraBoxProps;
export const Box: React.FC<BoxProps> = (props) => <ChakraBox {...props} />;

export type CenterProps = ChakraCenterProps;
export const Center: React.FC<CenterProps> = (props) => (
  <ChakraCenter {...props} />
);

export type StackProps = ChakraStackProps;
export const Stack: React.FC<StackProps> = (props) => (
  <ChakraStack {...props} />
);

export type FlexProps = ChakraFlexProps;
export const Flex: React.FC<FlexProps> = (props) => <ChakraFlex {...props} />;

export const HStack: React.FC<StackProps> = (props) => (
  <ChakraHStack {...props} />
);
