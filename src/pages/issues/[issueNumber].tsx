import { Center, ContentWrapper, Skeleton, Text } from 'components';
import { IssueDetail } from 'components/IssueDetail';
import { useIssue } from 'framework/github/use-issue';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

const IssueDetailPage: NextPage = () => {
  const router = useRouter();
  const issueNumber = router.query.issueNumber ?? '';
  const { data, error } = useIssue(issueNumber as string);

  return (
    <ContentWrapper>
      {error && (
        <Center>
          <Text>
            An error has occurred. Please refresh your browser and try again.
          </Text>
        </Center>
      )}
      <Skeleton isLoaded={!!data}>
        <IssueDetail
          title={data?.title ?? ''}
          body={data?.body ?? ''}
          state={data?.state ?? ''}
          issueNumber={data?.issueNumber.toString() ?? '0'}
        />
      </Skeleton>
    </ContentWrapper>
  );
};

export default IssueDetailPage;
