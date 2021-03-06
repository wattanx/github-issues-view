import { NextPage } from 'next';
import {
  Box,
  Center,
  ContentWrapper,
  IssuesListView,
  Stack,
  Text,
} from 'components';
import { useRouter } from 'next/dist/client/router';
import { useIssues } from '@issues';
import { Pager } from 'components/Pager';
import { config } from 'site.config';
import { ApplicationError } from 'framework';

const Issues: NextPage = () => {
  const router = useRouter();
  const pageNumber = router.query.page ?? '1';
  const perPage = router.query.per_page ?? '10';

  const { data, error } = useIssues({
    owner: config.ownerName,
    repositoryName: config.repositoryName,
    pageNumber: pageNumber as string,
    perPage: perPage as string,
  });

  return (
    <ContentWrapper>
      <Stack padding={2}>
        <Text>Owner: {config.ownerName}</Text>
        <Text>Repository: {config.repositoryName}</Text>
      </Stack>
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
      <Box borderWidth="1px" borderColor="#e2e2e2" borderRadius="6px">
        <IssuesListView issues={data?.issues} />
      </Box>
      <Center marginTop={3}>
        {data && (
          <Pager
            first={1}
            prev={data?.prevPage ?? 0}
            current={data?.currentPage ?? 0}
            next={data?.nextPage ?? 0}
            last={data?.lastPage ?? 0}
          />
        )}
      </Center>
    </ContentWrapper>
  );
};

export default Issues;
