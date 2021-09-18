import useSWR from 'swr';

export const useData = <TResponse>(
  key: string | null,
  fetcher: (url: string) => Promise<TResponse>,
) => {
  return useSWR(key, fetcher);
};
