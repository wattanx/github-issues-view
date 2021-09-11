import { IssueType, useData, useHttpClient } from 'framework';
import { GitHubIssueType } from 'types/github';

export const useIssue = (issueNumber: string) => {
  const client = useHttpClient();
  const fetcher = async (url: string) => {
    const res = await client.get<GitHubIssueType>(url);
    const issues: IssueType = {
      title: res.data.title,
      body: res.data.body,
      state: res.data.state,
      issueNumber: res.data.number,
    };
    return issues;
  };

  return useData<IssueType>(
    `https://api.github.com/repos/facebook/react/issues/${issueNumber}`,
    fetcher,
  );
};
