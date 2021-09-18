import { Box } from '../components';

export type ContentWrapperProps = {
  children: React.ReactNode;
};
export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => (
  <Box maxWidth="1280px" margin="auto" padding={5}>
    {children}
  </Box>
);
