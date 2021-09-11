import { Issue } from './Issue';

export interface IIssuesRepository {
  getIssues(
    owner: string,
    reposName: string,
    perPage: number,
  ): Promise<Issue[]>;
}
