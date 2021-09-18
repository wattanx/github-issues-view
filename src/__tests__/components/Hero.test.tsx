import { Hero } from 'components';
import { render } from '@testing-library/react';

test('Hero Snapshot Test', () => {
  const component = render(<Hero />);
  expect(component).toMatchSnapshot();
});
