import { useJoinState } from '../../stores/joinStore.ts';

const TermsCheckInput = () => {
  const { useTermsCheck, privacyTermsCheck, useTermsCheckHandler, privacyTermsCheckHandler } = useJoinState();

  return (
    <label className="form-control mb-9 mt-5 w-full">
      <div className="flex flex-col">
        <label className="font-bold">약관 동의</label>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <label htmlFor="termsOne">이용약관 동의 (필수)</label>
        <input type="radio" className="radio-primary radio" checked={useTermsCheck} onClick={useTermsCheckHandler} />
      </div>
      {!useTermsCheck ? <span className="text-red-500">이용약관에 동의해 주세요.</span> : <span className="h-6"></span>}
      <div className="mt-2 flex items-center justify-between">
        <label htmlFor="termsTwo">개인정보 수집, 이용 동의 (필수)</label>
        <input
          type="radio"
          className="radio-primary radio"
          checked={privacyTermsCheck}
          onClick={privacyTermsCheckHandler}
        />
      </div>
      {!privacyTermsCheck ? (
        <span className="text-red-500">개인정보 수집, 이용에 동의해 주세요.</span>
      ) : (
        <span className="h-6"></span>
      )}
    </label>
  );
};

export default TermsCheckInput;
