import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
  forwardRef,
} from '@chakra-ui/react';

export type ButtonProps = ChakraButtonProps & {
  href?: string;
  target?: string;
};

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => (
  <ChakraButton {...props} ref={ref} />
));

export type IconButtonProps = ChakraIconButtonProps;

export const IconButton = forwardRef<IconButtonProps, 'button'>(
  (props, ref) => <ChakraIconButton {...props} ref={ref} />,
);
