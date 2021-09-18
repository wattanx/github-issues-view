import { render } from '@testing-library/react';
import { CTA } from 'components';

test('CTA Snapshot Test', () => {
  const component = render(<CTA />);
  expect(component).toMatchSnapshot();
});
