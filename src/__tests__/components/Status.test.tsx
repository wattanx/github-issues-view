import { OpenedStatus, ClosedStatus } from 'components';
import { render } from '@testing-library/react';
test('OpenedStatus Snapshot Test', () => {
  const component = render(<OpenedStatus />);
  expect(component).toMatchSnapshot();
});

test('ClosedStatus Snapshot Test', () => {
  const component = render(<ClosedStatus />);
  expect(component).toMatchSnapshot();
});
