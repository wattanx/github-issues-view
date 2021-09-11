import {
  AxiosClient,
  HttpClientProvider,
  IHttpClient,
  ResponseDTO,
  useIssues,
} from 'framework';
import { GithubIssuesRepository } from 'infrastructures';
import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { GitHubIssueType } from 'types/github';

describe('GitHubIssuesRepository Test', () => {
  it('API 疎通確認', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <HttpClientProvider client={new DummyClient()}>
        {children}
      </HttpClientProvider>
    );
    const { result, rerender, waitForNextUpdate } = renderHook(
      () => useIssues('1', '10'),
      {
        wrapper: wrapper,
      },
    );

    act(() => {
      // 一回呼び出すと中身が入る
      result.current.data;
    });

    await waitForNextUpdate();

    expect(result.current.data?.issues[0]).toEqual({
      title: 'unit test',
      body: 'unit test body',
      issueNumber: 123,
      state: 'open',
    });
    expect(result.current.data?.currentPage).toBe(1);
    expect(result.current.data?.nextPage).toBe(2);
    expect(result.current.data?.lastPage).toBe(82);
  });
});

class DummyClient implements IHttpClient {
  public get<TResponse = GitHubIssueType[]>(
    url: string,
  ): Promise<ResponseDTO<TResponse>> {
    return new Promise((resolve, reject) => {
      resolve({
        data: [
          {
            title: 'unit test',
            body: 'unit test body',
            number: 123,
            state: 'open',
          },
        ] as any,
        headers: {
          link: '<https://api.github.com/repos/facebook/react/issues?page=2&per_page=10>; rel="next", <https://api.github.com/repos/facebook/react/issues?page=82&per_page=10>; rel="last"',
        },
      });
    });
  }
  public post<TRequest, TResponse>(
    url: string,
    request: TRequest,
  ): Promise<TResponse> {
    return new Promise((resolve, reject) => {});
  }
}
