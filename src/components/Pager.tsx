import NextLink from 'next/link';
import { config } from 'site.config';
import {
  Button,
  ChevronLeftIcon,
  ChevronRightIcon,
  Flex,
  IconButton,
  Spacer,
} from './common';

export type PagerProps = {
  first: number;
  prev: number;
  current: number;
  next: number;
  last: number;
};

export const Pager: React.VFC<PagerProps> = ({
  first,
  current,
  prev,
  next,
  last,
}) => (
  <Flex width="sm">
    {prev !== 0 && (
      <NextLink
        href={`/issues?page=${prev}&per_page=${config.perPage}`}
        shallow={true}
      >
        <IconButton aria-label="prev page" icon={<ChevronLeftIcon />} />
      </NextLink>
    )}
    <Spacer />
    <PageLink pageNumber={1} current={current} />
    <Spacer />
    {current <= 4 && (
      <>
        <PageLink pageNumber={2} current={current} />
        <Spacer />
        <PageLink pageNumber={3} current={current} />
        <Spacer />
        <PageLink pageNumber={4} current={current} />
        <Spacer />
        <PageLink pageNumber={5} current={current} />
      </>
    )}

    {current > 4 && (
      <>
        <Spacer />
        ...
      </>
    )}
    <Spacer />
    {current > 4 && (
      <>
        <PageLink pageNumber={current - 2} />
        <Spacer />
        <PageLink pageNumber={current - 1} />
        <Spacer />
        <PageLink pageNumber={current} current={current} />
        <Spacer />
        {current + 1 <= last && <PageLink pageNumber={current + 1} />}
      </>
    )}
    {current > 4 && last > current + 1 && (
      <>
        <Spacer />
        <PageLink pageNumber={current + 2} />
        <Spacer />
      </>
    )}

    {current + 3 < last && (
      <>
        <Spacer />
        ...
        <Spacer />
      </>
    )}

    {current + 2 < last && <PageLink pageNumber={last} />}
    <Spacer />
    {last > current && (
      <NextLink
        href={`/issues?page=${next}&per_page=${config.perPage}`}
        shallow={true}
      >
        <IconButton aria-label="prev page" icon={<ChevronRightIcon />} />
      </NextLink>
    )}
  </Flex>
);

const PageLink: React.VFC<{ pageNumber: number; current?: number }> = ({
  pageNumber,
  current,
}) => (
  <NextLink
    href={`/issues?page=${pageNumber}&per_page=${config.perPage}`}
    shallow={true}
  >
    <Button background={current === pageNumber ? 'teal.300' : 'none'}>
      {pageNumber}
    </Button>
  </NextLink>
);
