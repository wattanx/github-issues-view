import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';

export type TextProps = ChakraTextProps;
export const Text: React.FC<TextProps> = (props) => <ChakraText {...props} />;
