export const config = {
  siteMeta: {
    title: 'GitHub Issues View',
    description: 'GitHubのIssueを閲覧するViewerです',
  },
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASEURL
      : 'http://localhost:3000',

  perPage: process.env.NEXT_PUBLIC_PER_PAGE ?? '10',
  ownerName: process.env.NEXT_PUBLIC_OWNER_NAME ?? 'facebook',
  repositoryName: process.env.NEXT_PUBLIC_REPO_NAME ?? 'react',
};
