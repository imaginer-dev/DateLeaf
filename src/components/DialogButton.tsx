import { ReactNode, useRef } from 'react';
import Dialog from './Dialog.tsx';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

interface Props {
  classname?: string;
  name: string;
  title?: string;
  desc: string;
  children?: ReactNode;
}

function DialogButton({ classname, name, title, desc, children }: Props) {
  const dialogRef = useRef<DialogElement | null>(null);

  const openModal = (dialogRef: React.RefObject<DialogElement>) => {
    if (dialogRef.current) {
      dialogRef.current?.openModal();
    }
  };

  return (
    <div>
      <button className={classname} onClick={() => openModal(dialogRef)}>
        {name}
      </button>
      <Dialog ref={dialogRef} title={title} desc={desc}>
        {children}
      </Dialog>
    </div>
  );
}

export default DialogButton;
