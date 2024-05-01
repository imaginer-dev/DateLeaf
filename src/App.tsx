import { useRef } from 'react';
import Dialog from '../src/components/Dialog.tsx';

interface DialogElement {
  openModal: () => void;
  closeModal: () => void;
}

function App() {
  const dialogRef1 = useRef<DialogElement | null>(null);
  const dialogRef2 = useRef<DialogElement | null>(null);

  const openModal = (dialogRef: React.RefObject<DialogElement>) => {
    if (dialogRef.current) {
      dialogRef.current?.openModal();
    }
  };

  return (
    <div>
      <button onClick={() => openModal(dialogRef1)}>팝업 열기 1</button>
      <Dialog ref={dialogRef1} desc="팝업설명"></Dialog>
      <br />
      <button onClick={() => openModal(dialogRef2)}>팝업 열기 2</button>
      <Dialog ref={dialogRef2} title="팝업제목" desc="팝업설명">
        <p>children</p>
      </Dialog>
    </div>
  );
}

export default App;
