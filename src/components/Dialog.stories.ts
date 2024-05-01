import Dialog from './Dialog.tsx';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
};

export default meta;

export type Story = StoryObj<typeof Dialog>;

export const Default: Story = {};
