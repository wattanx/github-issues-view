import {
  HttpClientProvider,
  IHttpClient,
  ResponseDTO,
  useIssues,
} from 'framework';
import { act, renderHook } from '@testing-library/react-hooks';
import { GitHubIssueType } from 'types/github';
import { SWRConfig } from 'swr';

describe('use-issues Test', () => {
  it('GitHubからIssue情報の取得およびページ情報が取得できること', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SWRConfig value={{ provider: () => new Map() }}>
        <HttpClientProvider client={new DummyClient()}>
          {children}
        </HttpClientProvider>
      </SWRConfig>
    );
    const { result, waitForNextUpdate } = renderHook(
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

  it('例外発生時errorにエラー情報が含まれていること', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SWRConfig value={{ provider: () => new Map() }}>
        <HttpClientProvider client={new DummyErrorClient()}>
          {children}
        </HttpClientProvider>
      </SWRConfig>
    );
    const { result, waitForNextUpdate } = renderHook(
      () => useIssues('1', '10'),
      {
        wrapper: wrapper,
      },
    );

    act(() => {
      // 一回呼び出すと中身が入る
      result.current.error;
    });

    await waitForNextUpdate();

    expect(result.current.error.message).toBe('There is no data.');
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

class DummyErrorClient implements IHttpClient {
  public get<TResponse = GitHubIssueType[]>(
    url: string,
  ): Promise<ResponseDTO<TResponse>> {
    return new Promise((resolve, reject) => {
      resolve({
        data: [] as any,
        headers: {},
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
