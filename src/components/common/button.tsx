import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
} from '@chakra-ui/react';

export type ButtonProps = ChakraButtonProps & {
  href?: string;
  target?: string;
};

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => (
  <ChakraButton {...props} ref={ref} />
));
