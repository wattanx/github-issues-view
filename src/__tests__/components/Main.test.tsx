import { Main } from 'components';
import { render } from '@testing-library/react';

test('Main Snapshot Test', () => {
  const component = render(<Main></Main>);
  expect(component).toMatchSnapshot();
});
