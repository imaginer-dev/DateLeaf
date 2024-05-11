import { useJoinState } from '@/stores/joinStore';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TermsCheckInput = () => {
  const { useTermsCheck, privacyTermsCheck, useTermsCheckHandler, privacyTermsCheckHandler } = useJoinState();
  const { privacyTerms, useTerms } = useLocation().state || {};

  useEffect(() => {
    if (privacyTerms) privacyTermsCheckHandler;
    if (useTerms) useTermsCheckHandler;
  }, [privacyTerms, privacyTermsCheckHandler, useTerms, useTermsCheckHandler]);

  return (
    <label className="form-control mb-9 mt-5 w-full">
      <div className="flex flex-col">
        <label className="font-bold">약관 동의</label>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <label className="hover:underline" htmlFor="termsOne">
          <a href="/policy/usecondition">이용약관 동의 (필수)</a>
        </label>
        <input
          type="radio"
          className="radio-primary radio"
          checked={useTermsCheck}
          aria-label={'join-useTermsCheck-input'}
          readOnly
        />
      </div>
      {!useTermsCheck ? <span className="text-red-500">이용약관에 동의해 주세요.</span> : <span className="h-6"></span>}
      <div className="mt-2 flex items-center justify-between">
        <label className="hover:underline" htmlFor="termsTwo">
          <a href="/policy/personalInfo">개인정보 수집, 이용 동의 (필수)</a>
        </label>
        <input
          type="radio"
          className="radio-primary radio"
          checked={privacyTermsCheck}
          aria-label={'join-privacyTermsCheck-input'}
          readOnly
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
