import NextLink from 'next/link';
import {
  Box,
  ClosedStatus,
  Flex,
  OpenedStatus,
  Stack,
  Skeleton,
  Text,
} from '../components';
import { IssueStateType } from 'types/github';
import { IssueType } from 'framework';

export const IssuesListView: React.VFC<{
  issues?: IssueType[];
}> = ({ issues }) => {
  return (
    <Stack spacing="0">
      <Skeleton isLoaded={!!issues}>
        {issues &&
          issues.map((x) => {
            return (
              <IssuesListCell
                key={x.issueNumber}
                title={x.title}
                issueNumber={x.issueNumber}
                state={x.state}
              />
            );
          })}
      </Skeleton>
    </Stack>
  );
};

type IssuesListCellProps = {
  state: IssueStateType;
  title: string;
  issueNumber: number;
};

const IssuesListCell: React.VFC<IssuesListCellProps> = ({
  state,
  title,
  issueNumber,
}) => (
  <Flex
    borderTopColor="#e2e2e2"
    borderTopWidth="1px"
    _first={{ borderTopColor: 'transparent' }}
    data-testid="issues-list"
  >
    <Box paddingTop={3} paddingLeft={3}>
      {state === 'open' && <OpenedStatus />}
      {state === 'closed' && <ClosedStatus />}
    </Box>
    <Box padding={2}>
      <NextLink
        href="/issues/[issueNumber]"
        as={`/issues/${issueNumber}`}
        shallow={true}
        passHref
      >
        <Box as="a">
          <Text>{title}</Text>
        </Box>
      </NextLink>
      <Text fontSize="sm">#{issueNumber}</Text>
    </Box>
  </Flex>
);
