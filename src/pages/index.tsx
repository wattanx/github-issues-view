import Link from 'next/link';
import {
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
  Box,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

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
