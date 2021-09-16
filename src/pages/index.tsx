import { Box } from '@chakra-ui/react';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { CTA } from '../components/CTA';

const Index = () => (
  <Container height="100vh">
    <Box as="section" pt="6rem" pb={{ base: '0', md: '5rem' }}>
      <Box textAlign="center">
        <Hero />
      </Box>
    </Box>

    <CTA />
  </Container>
);

export default Index;
