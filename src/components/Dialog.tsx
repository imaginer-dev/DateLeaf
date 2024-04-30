// import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';

// interface Props {
//     children?: ReactNode;
//     title: string;
//     desc: string;
// }
// interface HTMLDialogElement {
//     openModal: () => void;
//     closeModal: () => void;
// }
// const Dialog = forwardRef<HTMLDialogElement, Props>((props, ref ) => {
//     const {children, title, desc} = props;
//     const dialogRef = useRef<HTMLDialogElement | null>(null);

//     useImperativeHandle(ref, () => ({
//         openModal: () => dialogRef.current?.showModal(),
//         closeModal: () => dialogRef.current?.close(),
//     }));

//     return (
//         <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
//             <div className="modal-box">
//                 {title && <h3 className="font-bold text-lg">{title}</h3>}
//                 {desc && <p className="py-4">{desc}</p>}
//                 {children && <div>{children}</div>}
//                 <form method="dialog" className="modal-action flex justify-center">
//                     <button type="button" className="btn bg-primary text-base-100" onClick={() => dialogRef.current?.close()}>닫기</button>
//                 </form>
//             </div>
//         </dialog>
//     );
// });

// export default Dialog;
