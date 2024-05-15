import { useGetProfile } from '@/react-queries/userGetProfile';

const SettingPage = () => {
  const { data: user, error, isLoading, isError } = useGetProfile();
  console.log(user);

  if (isError) {
    // TODO: 추후 에러 처리
    console.error(error);
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      {isLoading && <span className="loading" />}
      <div className=" absolute top-[70px] inline-flex h-40 flex-col items-start justify-start gap-2.5 border-b border-yellow-500 px-8 py-5">
        <div className=" w-44 font-['Inter'] text-base font-semibold leading-normal text-black">정보</div>
        <div className=" flex flex-col items-start justify-start gap-2.5">
          <div className=" inline-flex w-80 items-start justify-between">
            <div className=" text-center font-['Inter'] text-base font-normal leading-normal text-black">버전 정보</div>
            <div className=" text-center font-['Inter'] text-base font-normal leading-normal text-black">0.0.1v</div>
          </div>
          <div className=" inline-flex w-80 items-center justify-between">
            <div className=" text-center font-['Inter'] text-base font-normal leading-normal text-black">
              이용약관 보기
            </div>
            <div className=" relative h-5 w-5" />
          </div>
          <div className=" inline-flex w-80 items-center justify-between">
            <div className=" text-center font-['Inter'] text-base font-normal leading-normal text-black">
              개인정보 처리방침 보기
            </div>
            <div className=" relative h-5 w-5" />
          </div>
        </div>
        <div className=" absolute top-[200px] font-['Inter'] text-base font-normal leading-normal text-black">
          회원 탈퇴
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
