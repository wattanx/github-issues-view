import { IIssuesRepository } from 'domains';
import { Issue } from 'domains/Issue';
import { IHttpClient, IssueType, ResponseDTO } from 'framework';
import { getPageInfo } from 'framework/github/GitHubUtils';
import { GitHubIssueType, GitHubRepositoryType } from 'types/github';

export class GithubIssuesRepository implements IIssuesRepository {
  private readonly _client: IHttpClient;
  constructor(client: IHttpClient) {
    this._client = client;
  }

  async getRepositoryInfo(
    owner: string,
    repositoryName: string,
  ): Promise<ResponseDTO<GitHubRepositoryType>> {
    const res = await this._client.get<GitHubRepositoryType>(
      `https://api.github.com/repos/${owner}/${repositoryName}`,
    );

    return res;
  }

  async getIssues(
    owner: string,
    repositoryName: string,
    perPage: number,
  ): Promise<ResponseDTO<GitHubIssueType[]>> {
    const res = await this._client.get<GitHubIssueType[]>(
      `https://api.github.com/repos/${owner}/${repositoryName}/issues?per_page=${perPage}`,
    );
    const issues = res.data.map((x) => {
      return new Issue(x.number, x.title, x.body);
    });
    return {
      data: res.data,
      headers: res.headers,
    };
  }

  async getIssuesByPage(
    url: string,
    pageNumber: string,
  ): Promise<{
    issues: IssueType[];
    prevPage: number;
    currentPage: number;
    nextPage: number;
    lastPage: number;
  }> {
    const res = await this._client.get<GitHubIssueType[]>(url);
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
  }
}
