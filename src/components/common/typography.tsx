import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from '@chakra-ui/react';

export type TextProps = ChakraTextProps;
export const Text: React.FC<TextProps> = (props) => <ChakraText {...props} />;

export type HeadingProps = ChakraHeadingProps;
export const Heading: React.FC<HeadingProps> = (props) => (
  <ChakraHeading {...props} />
);
