import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

export type ButtonProps = ChakraButtonProps & {
  href?: string;
  target?: string;
};

export const Button: React.FC<ButtonProps> = (props) => (
  <ChakraButton {...props} />
);
