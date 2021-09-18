import { Meta } from '@storybook/react';
import { Box } from '../components/common';
import { Pager } from '../components/Pager';

export default {
  title: 'Example/Pager',
} as Meta;

export const PagerExample = () => {
  const pages = {
    prev: 0,
    current: 1,
    next: 2,
    last: 82,
  };
  return (
    <Box>
      <Pager
        first={1}
        next={pages.next}
        current={pages.current}
        prev={pages.prev}
        last={pages.last}
      />
    </Box>
  );
};
