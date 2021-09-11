import { NextPage } from 'next';
import { ContentWrapper, IssuesListView } from 'components';
import { useRouter } from 'next/dist/client/router';
import { useIssues } from '@issues';
import { Pager } from 'components/Pager';

const Issues: NextPage = () => {
  const router = useRouter();
  const pageNumber = router.query.page ?? '1';
  const perPage = router.query.per_page ?? '10';

  const { data } = useIssues(pageNumber as string, perPage as string);

  return (
    <ContentWrapper>
      <IssuesListView issues={data?.issues} />
      {data && (
        <Pager
          first={1}
          prev={data?.prevPage ?? 0}
          current={data?.currentPage ?? 0}
          next={data?.nextPage ?? 0}
          last={data?.lastPage ?? 0}
        />
      )}
    </ContentWrapper>
  );
};

export default Issues;
