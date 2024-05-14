import { useJoinState } from '@/stores/joinStore';

const PolicyPersonalButton = () => {
  const { privacyTermsCheckHandler } = useJoinState();

  return (
    <div className="absolute bottom-12 w-10/12 md:w-11/12">
      <button
        type={'button'}
        onClick={privacyTermsCheckHandler}
        className="btn btn-outline btn-primary m-auto block w-full max-w-md"
      >
        동의하기
      </button>
    </div>
  );
};

export default PolicyPersonalButton;
