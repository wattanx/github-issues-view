import { ContentWrapper } from 'components';
import { render } from '@testing-library/react';

test('ContentWrapper Snapshot Test', () => {
  const component = render(
    <ContentWrapper>
      <></>
    </ContentWrapper>,
  );
  expect(component).toMatchSnapshot();
});
