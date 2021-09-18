import { render } from '@testing-library/react';
import { IssueDetail } from 'components/IssueDetail';

test('IssueDetail Snapshot Test', () => {
  const component = render(
    <IssueDetail
      title={'snapshot'}
      body={'snapshot test'}
      issueNumber={'2'}
      state={'open'}
    />,
  );

  expect(component).toMatchSnapshot();
});
