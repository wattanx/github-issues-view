import { Box } from 'components';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

const IssueDetail: NextPage = () => {
  const router = useRouter();
  const { issueNumber } = router.query;
  return <Box>IssueNumber:{issueNumber}</Box>;
};

export default IssueDetail;
