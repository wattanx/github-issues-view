import { Meta } from '@storybook/react';
import { ContentWrapper } from '../components/ContentWrapper';
import { Box } from '../components/common';
import { IssueDetail } from '../components/IssueDetail';

export default {
  title: 'Example/IssueDetail',
} as Meta;

export const PagerExample = () => {
  const title =
    'Bug: react-dom Portal does not load on re-render with functional component';

  return (
    <ContentWrapper>
      <IssueDetail
        title={title}
        body={Body}
        issueNumber={'22330'}
        state="open"
      />
    </ContentWrapper>
  );
};

const Body = `<!-- Please provide a clear and concise description of what the bug is. Include screenshots if needed. Please test using the latest version of the relevant React packages to make sure your issue has not already been fixed. --> React version: 16.8.5 ## Steps To Reproduce 1. On initial load, "Portal" loads up a "Modal" as child element when the code is extracted to a functional component 2. On state change, it does not re-render. But does work if the code is inline instead of a functional component <!-- Your bug will get fixed much faster if we can run your code and it doesn't have dependencies other than React. Issues without reproduction steps or code examples may be immediately closed as not actionable. --> Link to code example: Works --> successMessage ? <NewModal title={' '} buttons={[{text: 'Close', onClick: goToLicences}]}> <SuccessMessage/> </NewModal> : </> Does not work --> const SuccessModal = () => <NewModal title={' '} buttons={[{text: 'Close', onClick: goToLicences}]}> <SuccessMessage/> </NewModal>; successMessage ? <SuccessModal/> : </> <!-- Please provide a CodeSandbox (https://codesandbox.io/s/new), a link to a repository on GitHub, or provide a minimal code example that reproduces the problem. You may provide a screenshot of the application if you think it is relevant to your bug report. Here are some tips for providing a minimal example: https://stackoverflow.com/help/mcve. --> ## The current behavior ## The expected behavior`;
