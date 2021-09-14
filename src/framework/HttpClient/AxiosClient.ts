import axios from 'axios';
import { ResponseDTO } from 'framework';
import { IHttpClient } from './IHttpClient';

export class AxiosClient implements IHttpClient {
  public get<TResponse>(url: string): Promise<ResponseDTO<TResponse>> {
    return axios.get<TResponse>(url).then((res) => {
      return {
        data: res.data,
        headers: res.headers,
      };
    });
  }
  public post<TRequest, TResponse>(
    url: string,
    request: TRequest,
  ): Promise<TResponse> {
    return axios.post<TResponse>(url, request).then((res) => res.data);
  }
}
