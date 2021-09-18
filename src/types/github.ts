export type GitHubRepositoryType = {
  open_issues: number;
  open_issues_count: number;
};

export type GitHubIssueResponseHeader = {
  link: string;
};

export type GitHubIssueType = {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: IssueStateType;
  title: string;
  body: string;
  user: GitHubUserType;
  labels: GitHubIssueLabelType[];
  assignee: GitHubUserType;
  assignees: GitHubUserType[];
  milestone: GitHubIssueMilestoneType;
  locked: boolean;
  active_lock_reason: string;
  comments: number;
  pull_request: GitHubPullRequestType;
  closed_at: string;
  created_at: string;
  updated_at: string;
  author_association: string;
};

export type GitHubUserType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

export type GitHubIssueLabelType = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  description: string;
  color: string;
  default: boolean;
};

export type GitHubIssueMilestoneType = {
  url: string;
  html_url: string;
  labels_url: string;
  id: number;
  node_id: string;
  number: number;
  state: IssueStateType;
  title: string;
  description: string;
  creator: GitHubUserType;
  open_issues: number;
  closed_issues: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  due_on: string;
};

export type GitHubPullRequestType = {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
};

export const IssueState = {
  Open: 'open',
  Closed: 'closed',
  All: 'all',
} as const;

export type IssueStateType = typeof IssueState[keyof typeof IssueState];
