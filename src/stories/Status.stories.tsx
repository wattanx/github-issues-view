import { Meta } from '@storybook/react';
import { OpenedStatus, ClosedStatus } from '../components/Status';

export default {
  title: 'Example/Status',
} as Meta;

export const OpenedStatusExample = () => <OpenedStatus />;

export const CheckedStatusExample = () => <ClosedStatus />;
