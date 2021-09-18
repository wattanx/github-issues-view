import DOMPurify from 'dompurify';
import { IssueType, toHtml, useData, useHttpClient } from 'framework';
import { GitHubIssueType } from 'types/github';

export const useIssue = (issueNumber: string) => {
  const client = useHttpClient();
  const fetcher = async (url: string) => {
    const res = await client.get<GitHubIssueType>(url);

    if (!res.data.title) {
      const error = new Error('There is no data.');
      throw error;
    }

    const html = DOMPurify().sanitize(toHtml(res.data.body));
    const issues: IssueType = {
      title: res.data.title,
      body: html,
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
