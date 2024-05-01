import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef } from 'react';
import DialogButton from './DialogButton';
import Dialog from './Dialog';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

const meta: Meta<typeof DialogButton | typeof Dialog> = {
  title: 'DialogButton',
  //   component: DialogButton,
  // 여기에 필요한 decorators나 argTypes를 추가할 수 있습니다.
};

export default meta;

//스토리북에서 각 스토리는 템플릿을 기반으로 하여 args를 통해
//각기 다른 프로퍼티를 전달받아야 합니다.
// 각 스토리는 StoryObj 타입을 사용하여 정의되어야 하며,
//render 메서드를 통해 컴포넌트를 렌더링하는 구조를 따라야 합니다.
// 스토리 템플릿 정의
const Template: StoryObj<typeof DialogButton> = {
  render: (args) => <DialogButton {...args} />,
};

// 기본 스토리
export const Default = {
  ...Template,
  args: {
    classname: 'btn',
    name: '버튼명',
    title: '팝업제목',
    desc: '팝업설명',
    children: <p>children</p>,
  },
};

// 제목 없는 스토리
export const WithoutTitle = {
  ...Template,
  args: {
    classname: 'btn',
    name: '버튼명',
    desc: '팝업설명',
    children: <p>children</p>,
  },
};

// 설명만 있는 스토리
export const OnlyDescription = {
  ...Template,
  args: {
    classname: 'btn',
    name: '버튼명',
    desc: '팝업설명',
  },
};

const DialogTemplate: StoryObj<typeof Dialog> = {
  render: (args) => {
    const dialogRef = useRef<DialogElement | null>(null);
    useEffect(() => {
      dialogRef.current?.openModal();
    }, []);
    return <Dialog ref={dialogRef} {...args} />;
  },
};

export const AutoOpenDialog = {
  ...DialogTemplate,
  args: {
    title: '팝업제목',
    desc: '팝업설명',
  },
};
