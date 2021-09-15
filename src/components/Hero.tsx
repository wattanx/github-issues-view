import { Heading } from 'components';

export const Hero = () => (
  <Heading
    maxW="16ch"
    mx="auto"
    fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
    fontFamily="heading"
    fontWeight="extrabold"
    mb="16px"
    lineHeight="1.2"
  >
    GitHub Issues View
  </Heading>
);
