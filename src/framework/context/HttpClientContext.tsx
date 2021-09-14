import { AxiosClient, IHttpClient } from 'framework';
import { createContext, useContext } from 'react';

const HttpClientContext = createContext<IHttpClient>(new AxiosClient());

export const HttpClientProvider: React.FC<{ client: IHttpClient }> = (
  props,
) => (
  <HttpClientContext.Provider value={props.client}>
    {props.children}
  </HttpClientContext.Provider>
);

export const useHttpClient = () => useContext(HttpClientContext);
