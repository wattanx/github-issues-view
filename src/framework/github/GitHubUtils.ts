import { GitHubIssueResponseHeader } from 'types/github';

export const getPageInfo = (headers: GitHubIssueResponseHeader) => {
  const lastPageRegex = /\?page=(\d+).*>; rel="last"/;

  const pageArray = headers.link.split(',');

  const results = pageArray
    .find((x) => x.includes('rel="last"'))
    ?.match(lastPageRegex) ?? [''];

  return {
    last: results[1],
  };
};
