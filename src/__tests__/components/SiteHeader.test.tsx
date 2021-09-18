import { SiteHeader } from 'components';
import { render } from '@testing-library/react';

test('SiteHeader Snapshot Test', () => {
  const component = render(<SiteHeader />);
  expect(component).toMatchSnapshot();
});
