import Loading from './Loading.tsx';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
};

export default meta;

export type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
