import { render } from '@testing-library/react';
import { Container } from 'components';

test('Container Snapshot Test', () => {
  const component = render(<Container></Container>);
  expect(component).toMatchSnapshot();
});
