import Link from 'next/link';
import { Box, ClosedStatus, Flex, OpenedStatus, Stack, Text } from 'components';
import { IssueStateType } from 'types/github';
import { IssueType } from 'framework';

export const IssuesListView: React.VFC<{ issues?: IssueType[] }> = ({
  issues,
}) => {
  return (
    <Stack spacing="0">
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
  <Flex>
    <Box paddingTop={3}>
      {state === 'open' && <OpenedStatus />}
      {state === 'closed' && <ClosedStatus />}
    </Box>
    <Box padding={2}>
      <Link
        href="/issues/[issueNumber]"
        as={`/issues/${issueNumber}`}
        shallow={true}
      >
        <Text>{title}</Text>
      </Link>
      <Text fontSize="sm">#{issueNumber}</Text>
    </Box>
  </Flex>
);
