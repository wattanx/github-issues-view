import {
  Skeleton as ChakraSkeleton,
  SkeletonProps as ChakraSkeletonProps,
} from '@chakra-ui/skeleton';

export type SkeletonProps = ChakraSkeletonProps;
export const Skeleton: React.FC<SkeletonProps> = (props) => (
  <ChakraSkeleton {...props} />
);
