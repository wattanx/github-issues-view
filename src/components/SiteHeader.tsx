import NextLink from 'next/link';
import { Box, HStack } from 'components';

export const SiteHeader: React.FC = () => (
  <Box
    as="header"
    position="sticky"
    p="1rem 0"
    top="0"
    zIndex="sticky"
    boxShadow="base"
    bg="white"
  >
    <Box maxWidth="1280px" margin="auto">
      <HStack alignItems="center" fontWeight="bold">
        <Box paddingInlineEnd="1.5rem" paddingInlineStart="1.5rem">
          <NextLink href="/" passHref>
            <Box as="a" alignItems="center" textDecoration="none">
              GitHub Issues View
            </Box>
          </NextLink>
        </Box>
      </HStack>
    </Box>
  </Box>
);
