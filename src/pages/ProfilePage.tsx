import { useState, useRef, FC, ChangeEvent } from 'react';
import imageCompression from 'browser-image-compression';
import { useGetProfile } from '@/react-queries/userGetProfile';
import HistoryBackButton from '@/components/common/HistoryBackButton';
import ProfileIcon from '@/assets/svgs/ProfileIcon';
import { updateUserProfile } from '@/apis/updateUserApi';
import { LooseValidation, ValidateProcessor } from '@/utils/authUtils';
import Dialog from '@/components/common/Dialog';


interface Props {
  userProfile?: {
    imageUrl: string | null;
  };
}

interface DialogElement {
    openModal: () => void;
    closeModal: () => void;
}

const ProfilePage: FC<Props> = ({ userProfile }) => {
    const { data: user, error, isLoading, isError } = useGetProfile();
    const [editMode, setEditMode] = useState(false); 
    const [imageUrl, setImageUrl] = useState(userProfile ? userProfile.imageUrl : user?.image_url);
    const [originalImageUrl] = useState(userProfile ? userProfile.imageUrl : user?.image_url);
    const [nickname, setNickname] = useState(user ? user?.user_nickname : '');
    const [originalNickname] = useState(user ? user.user_nickname : '');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const validator = new ValidateProcessor(new LooseValidation());
    const dialogRef = useRef<DialogElement | null>(null);
    const [dialogMessage, setDialogMessage] = useState('');


    const resetProfileStateExceptImage = () => {
        setNickname(user ? user.user_nickname : '');  
        setSelectedFile(null);  
        setFileName(''); 
        setEditMode(false); 
    };

    // 편집모드
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    //편집모드 취소
    const resetData = () => {
        setImageUrl(userProfile ? userProfile.imageUrl : user?.image_url); 
        resetProfileStateExceptImage(); 
    };

    //이미지 압축 
    const getImgUpload = async (image: File) => {
        const options = {
            maxSizeMB: 0.5,  // 최대 파일 크기를 0.5MB로 제한
            maxWidthOrHeight: 1920, // 최대 너비 또는 높이를 1920px로 제한
            useWebWorker: true 
        };
        const resizingBlob = await imageCompression(image, options);
        const resizingFile = new File([resizingBlob], image.name, { type: image.type });
        console.log(`원본 파일 크기: ${(image.size / 1024).toFixed(2)} KB`);
        console.log(`압축 후 파일 크기: ${(resizingBlob.size / 1024).toFixed(2)} KB`);
        return resizingFile;
    };

    //프로필 이미지 수정
    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            // 이미지 파일 형식 검사
            if (!file.type.startsWith('image/')) {
                setDialogMessage('※ 이미지 파일만 업로드 가능합니다.');
                dialogRef.current?.openModal();
                return;  // 함수 종료
            }

            setFileName(file.name);
            
            try {
                const compressedFile = await getImgUpload(file); 
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImageUrl(reader.result as string); 
                };
                reader.readAsDataURL(compressedFile);
                setSelectedFile(compressedFile); 
            } catch (error) {
                console.error('이미지 압축 실패:', error); 
            }
        }
    };
    
    //프로필 수정완료
    const updateProfile = async () => {
        if (!user) return;

        // 변경사항 없을 때 알림
        if (nickname === originalNickname && imageUrl === originalImageUrl && !selectedFile) {
            setDialogMessage('수정된 내용이 없습니다.');
            dialogRef.current?.openModal();
            return;
        }

        if (nickname && !validator.isValidNickName(nickname)) {
            setDialogMessage('※ 영문, 숫자, 한글만 사용 가능하며, 2~12자 이내여야 합니다.');
            dialogRef.current?.openModal();
            return; 
        }
        const param = {
            id: user.id,
            user_nickname: nickname,
            file: selectedFile,
        };

        try {
            const updatedData = await updateUserProfile(param);
            console.log('프로필 업데이트 성공:', updatedData);
            setDialogMessage('수정 완료되었습니다.');
            dialogRef.current?.openModal();
            resetProfileStateExceptImage();
        } catch (error) {
            console.error('프로필 업데이트 실패:', error);
            setDialogMessage('수정 실패되었습니다.');
            dialogRef.current?.openModal();
            resetProfileStateExceptImage();
        }
    };

    if (isError) {
        // TODO: 추후 에러 처리
        console.error(error);
    }

    return (
        <div className="flex min-h-dvh w-screen flex-col overflow-x-hidden px-6">
        {isLoading && <span className="loading" />}
        <nav className="navHeight flex w-full items-center justify-between px-5 py-5">
            <HistoryBackButton />
            <h1 className="text-xl font-semibold" hidden>
            프로필
            </h1>
            {/* 편집버튼 */}
            <button type="button" onClick={toggleEditMode} hidden={editMode}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L6.83218 19.8195C6.30351 20.3481 5.65144 20.7368 4.93489 20.9502L2.25 21.75L3.04978 19.0651C3.26323 18.3486 3.65185 17.6965 4.18052 17.1678L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499"
                stroke="#0F172A"
                strokeWidth="1.5"
                strokeLinejoin="round"
                />
            </svg>
            </button>
        </nav>
      <div className="container mx-auto flex max-w-sm flex-1 flex-col gap-4 pb-[50px] pt-4">
            <div className="relative mx-auto my-5 flex h-80 w-80 items-center justify-center">
            {/* <button type="button" hidden={!editMode} className="absolute right-2.5 top-0" onClick={() => handleImageButton()}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L6.83218 19.8195C6.30351 20.3481 5.65144 20.7368 4.93489 20.9502L2.25 21.75L3.04978 19.0651C3.26323 18.3486 3.65185 17.6965 4.18052 17.1678L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499" stroke="#0F172A" strokeWidth="1.5" strokeLinejoin="round"/>
                            </svg>
                        </button> */}
            <ProfileIcon imageUrl={imageUrl} width="100%" height="100%" fill="#CCCFC4" />
            {editMode && (
                <label
                htmlFor="img"
                className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 rounded-full bg-black bg-opacity-50 text-white"
                >
                <span>이미지를 드래그해서 넣어주세요!</span>
                <span className='text-sm line-clamp-1 mr-2 ml-2'>{fileName && `선택된 파일: ${fileName}`}</span>
                <input
                    type="file"
                    id="img"
                    className="file-input file-input-bordered file-input-success file-input-s w-4/5 max-w-xs"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e)}
                />
                </label>
            )}
            </div>
            <div className="info-form mt-8 flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <span>이름</span>
                <input type="text" value={user?.user_name} readOnly className="bg-transparent p-2" />
            </div>
            <div className="flex items-center justify-between">
                <span>닉네임</span>
                <input
                    type="text"
                    value={nickname as string}
                    onChange={(e) => setNickname(e.target.value)}
                    readOnly={!editMode}
                    className={`p-2 ${!editMode ? 'bg-transparent' : ''}`}
                />
            </div>
            <div className="flex items-center justify-between">
                <span>전화번호</span>
                <input type="text" value={user?.phone} readOnly className="bg-transparent p-2" />
            </div>
            </div>

            {editMode && (
            <div className="mt-20 flex gap-2">
                <button className="btn btn-outline btn-primary flex-1" onClick={() => resetData()}>
                취소
                </button>
                <button type="submit" className="btn btn-outline btn-primary flex-1" onClick={() => updateProfile()}>
                수정완료
                </button>
            </div>
            )}
        </div>
        <Dialog
            ref={dialogRef}
            desc={dialogMessage}></Dialog>
        </div>
    );
};

export default ProfilePage;
