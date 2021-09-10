export interface IHttpClient {
  get: <TResponse>(url: string) => Promise<TResponse>;
  post: <TRequest, TResponse>(
    url: string,
    request: TRequest
  ) => Promise<TResponse>;
}
