import axios from "axios";
import { IHttpClient } from "./IHttpClient";

export class AxiosClient implements IHttpClient {
  public get<TResponse>(url: string): Promise<TResponse> {
    return axios.get<TResponse>(url).then((res) => res.data);
  }
  public post<TRequest, TResponse>(
    url: string,
    request: TRequest
  ): Promise<TResponse> {
    return axios.post<TResponse>(url, request).then((res) => res.data);
  }
}
