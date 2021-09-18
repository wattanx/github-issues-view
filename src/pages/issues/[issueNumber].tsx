import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  Center,
  ContentWrapper,
  Skeleton,
  Text,
  IssueDetail,
} from 'components';
import { useIssue } from '@issues';
import { config } from 'site.config';
import { ApplicationError } from 'framework';

const IssueDetailPage: NextPage = () => {
  const router = useRouter();
  const issueNumber = router.query.issueNumber ?? '';
  const { data, error } = useIssue({
    owner: config.ownerName,
    repositoryName: config.repositoryName,
    issueNumber: issueNumber as string,
  });

  return (
    <ContentWrapper>
      {error && error instanceof ApplicationError && (
        <Center>
          <Text>{error.message}</Text>
        </Center>
      )}
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
