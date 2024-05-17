import { Meta, StoryObj } from '@storybook/react';
import AppBar from './AppBar';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof AppBar> = {
  title: 'AppBar',
  component: AppBar,
  render: (args) => (
    <BrowserRouter>
      <AppBar {...args} />
    </BrowserRouter>
  ),
};

export default meta;

export type story = StoryObj<typeof AppBar>;

export const Default: story = {
  args: {
    title: '모임 일정 등록하기',
    backButton: true,
  },
};
