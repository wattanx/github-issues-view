import { IIssuesRepository } from 'domains';
import { Issue } from 'domains/Issue';
import { IHttpClient } from 'framework';
import { GitHubIssueType } from 'types/github';

export class GithubIssuesRepository implements IIssuesRepository {
  private readonly _client: IHttpClient;
  constructor(client: IHttpClient) {
    this._client = client;
  }

  async getIssues(
    owner: string,
    repositoryName: string,
    perPage: number = 30,
  ): Promise<Issue[]> {
    const data = await this._client.get<GitHubIssueType[]>(
      `https://api.github.com/repos/${owner}/${repositoryName}/issues?per_page=${perPage}`,
    );
    const issues = data.map((x) => {
      return new Issue(x.number, x.title, x.body);
    });
    return issues;
  }
}
