import { Box } from 'components';

export type ListViewProps = {
  children: React.ReactNode;
};

export type ListViewCellProps = {
  children: React.ReactNode;
};

export const ListView: React.FC<ListViewProps> = ({ children }) => (
  <Box>{children}</Box>
);

export const ListViewCell: React.FC<ListViewCellProps> = ({ children }) => (
  <Box>{children}</Box>
);
