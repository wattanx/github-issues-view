export const config = {
  siteMeta: {
    title: 'GitHub Issues View',
    description: 'GitHubのIssueを閲覧するViewerです',
  },
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASEURL
      : 'http://localhost:3000',
};
