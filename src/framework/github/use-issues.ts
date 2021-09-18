import { useHttpClient } from 'framework';
import { IssueType, useData } from 'framework/common';
import { GitHubIssueType } from 'types/github';
import { getPageInfo } from './GitHubUtils';

export type UseIssuesReturnType = {
  issues: IssueType[];
  prevPage: number;
  currentPage: number;
  nextPage: number;
  lastPage: number;
};

export const useIssues = (pageNumber: string, perPage: string) => {
  const client = useHttpClient();
  const fetcher = async (url: string): Promise<UseIssuesReturnType> => {
    const res = await client.get<GitHubIssueType[]>(url);

    if (res.data.length === 0) {
      const error = new Error('There is no data.');
      throw error;
    }

    const issues: IssueType[] = res.data.map((x) => {
      return {
        title: x.title,
        body: x.body,
        issueNumber: x.number,
        state: x.state,
      };
    });
    const pageInfo = getPageInfo(res.headers);
    return {
      issues: issues,
      prevPage: parseInt(pageNumber) - 1,
      currentPage: parseInt(pageNumber),
      nextPage: parseInt(pageNumber) + 1,
      lastPage: parseInt(pageInfo.last),
    };
  };

  return useData<UseIssuesReturnType>(
    `https://api.github.com/repos/facebook/react/issues?page=${pageNumber}&per_page=${perPage}`,
    fetcher,
  );
};
