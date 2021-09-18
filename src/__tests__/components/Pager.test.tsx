import { Pager } from 'components';
import { render } from '@testing-library/react';

test('Pager Snapshot Test', () => {
  const component = render(
    <Pager first={1} current={1} last={83} prev={0} next={2} />,
  );
  expect(component).toMatchSnapshot();
});
