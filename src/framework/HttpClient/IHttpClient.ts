export interface IHttpClient {
  get: <TResponse>(url: string) => Promise<ResponseDTO<TResponse>>;
  post: <TRequest, TResponse>(
    url: string,
    request: TRequest,
  ) => Promise<TResponse>;
}

export type ResponseDTO<TResponse> = {
  data: TResponse;
  headers: any;
};
