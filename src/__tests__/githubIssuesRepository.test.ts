import { AxiosClient } from 'framework';
import { GithubIssuesRepository } from 'infrastructures';

describe('GitHubIssuesRepository Test', () => {
  it('API 疎通確認', () => {
    const repository = new GithubIssuesRepository(new AxiosClient());
    return repository.getIssues('facebook', 'react').then((res) => {
      expect(res.length).toBe(30);
    });
  });
});
