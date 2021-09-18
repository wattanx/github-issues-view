import { render } from '@testing-library/react';
import { IssuesListView } from 'components';

test('IssuesListView Snapshot Test', () => {
  const component = render(
    <IssuesListView
      issues={[
        {
          title: 'unit test',
          body: 'unit test body',
          issueNumber: 123,
          state: 'open',
        },
      ]}
    />,
  );

  expect(component).toMatchSnapshot();
});
