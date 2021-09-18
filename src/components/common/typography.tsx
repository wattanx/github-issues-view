import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
  forwardRef,
} from '@chakra-ui/react';

export type TextProps = ChakraTextProps;
export const Text = forwardRef<TextProps, 'p'>((props, ref) => (
  <ChakraText {...props} ref={ref} />
));

export type HeadingProps = ChakraHeadingProps;
export const Heading: React.FC<HeadingProps> = (props) => (
  <ChakraHeading {...props} />
);
