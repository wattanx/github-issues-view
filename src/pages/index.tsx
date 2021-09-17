import { Container, CTA, Hero, Box } from '../components';

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
