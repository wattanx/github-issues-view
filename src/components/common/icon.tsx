import {
  CheckCircleIcon as ChakraCheckCircleIcon,
  IconProps as ChakraIconProps,
  CheckIcon as ChakraCheckIcon,
  ChevronLeftIcon as ChakraChevronLeftIcon,
  ChevronRightIcon as ChakraChevronRightIcon,
} from '@chakra-ui/icons';

export type IconProps = ChakraIconProps;

// Storybookが@emotion/coreを使っているため、エラーがでる。Storybook v7で解消予定。
export const CheckCircleIcon: React.VFC<IconProps> = (props) => (
  // @ts-ignore
  <ChakraCheckCircleIcon {...props} />
);

export const CheckIcon: React.VFC<IconProps> = (props) => (
  // @ts-ignore
  <ChakraCheckIcon {...props} />
);

export const ChevronRightIcon: React.VFC<IconProps> = (props) => (
  // @ts-ignore
  <ChakraChevronRightIcon {...props} />
);

export const ChevronLeftIcon: React.VFC<IconProps> = (props) => (
  // @ts-ignore
  <ChakraChevronLeftIcon {...props} />
);
