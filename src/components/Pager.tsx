import { Box, Button, IconButton, Spacer } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex } from './common';
import Link from 'next/link';
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
      <Link href={`/issues?page=${prev}&per_page=10`} shallow={true}>
        <IconButton aria-label="prev page" icon={<ChevronLeftIcon />} />
      </Link>
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
      </>
    )}
    {current > 4 && last > current + 1 && (
      <>
        <Spacer />
        <PageLink pageNumber={current + 1} />
        <Spacer />
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

    {current + 2 > last && <PageLink pageNumber={last} />}
    <Spacer />
    {last > current && (
      <Link href={`/issues?page=${next}&per_page=10`} shallow={true}>
        <IconButton aria-label="prev page" icon={<ChevronRightIcon />} />
      </Link>
    )}
  </Flex>
);

const PageLink: React.VFC<{ pageNumber: number; current?: number }> = ({
  pageNumber,
  current,
}) => (
  <Link href={`/issues?page=${pageNumber}&per_page=10`} shallow={true}>
    <Button background={current === pageNumber ? 'teal.300' : 'none'}>
      {pageNumber}
    </Button>
  </Link>
);
