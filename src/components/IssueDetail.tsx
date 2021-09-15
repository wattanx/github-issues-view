import { Text, Heading, HStack } from '@chakra-ui/react';
import { Box } from './common';

export type IssueDetailProps = {
  title: string;
  body: string;
  state: string;
  issueNumber: string;
};

export const IssueDetail: React.VFC<IssueDetailProps> = ({
  title,
  body,
  state,
  issueNumber,
}) => {
  return (
    <Box>
      <Box borderBottomWidth="1px" borderBottomColor="#e2e2e2">
        <HStack>
          <Heading>
            {title}
            <Box fontWeight="normal" color="#b9b9b9" as="span" marginLeft={2}>
              #{issueNumber}
            </Box>
          </Heading>
        </HStack>
      </Box>
      <Box rounded="md" border="1px #e2e2e2 solid" marginTop={3} padding={2}>
        <Box borderBottom="1px #e2e2e2 solid" padding={1}></Box>
        <Box marginTop={3} width={['100%', '100%', '100%', '70%']}>
          {body}
        </Box>
      </Box>
    </Box>
  );
};
