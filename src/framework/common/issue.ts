export type IssueType = {
  issueNumber: number;
  title: string;
  body: string;
  state: 'open' | 'closed' | 'all';
};
