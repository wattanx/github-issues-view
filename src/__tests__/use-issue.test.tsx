import {
  HttpClientProvider,
  IHttpClient,
  ResponseDTO,
  useIssue,
} from 'framework';
import { act, renderHook } from '@testing-library/react-hooks';
import { GitHubIssueType } from 'types/github';
import { SWRConfig } from 'swr';

describe('use-issues Test', () => {
  it('GitHubからIssueの詳細情報の取得ができること', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SWRConfig value={{ provider: () => new Map() }}>
        <HttpClientProvider client={new DummyClient()}>
          {children}
        </HttpClientProvider>
      </SWRConfig>
    );
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useIssue({
          owner: 'facebook',
          repositoryName: 'react',
          issueNumber: '123',
        }),
      {
        wrapper: wrapper,
      },
    );

    act(() => {
      // 一回呼び出すと中身が入る
      result.current.data;
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual({
      title: 'unit test',
      body: '<p>unit test body</p>',
      issueNumber: 123,
      state: 'open',
    });
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
      () =>
        useIssue({
          owner: 'facebook',
          repositoryName: 'react',
          issueNumber: '0',
        }),
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
        data: {
          title: 'unit test',
          body: 'unit test body',
          number: 123,
          state: 'open',
        } as any,
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

class DummyErrorClient implements IHttpClient {
  public get<TResponse = GitHubIssueType[]>(
    url: string,
  ): Promise<ResponseDTO<TResponse>> {
    return new Promise((resolve, reject) => {
      resolve({
        data: {} as any,
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
