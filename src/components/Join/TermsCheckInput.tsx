import { useJoinState } from '../../stores/joinStore.ts';

const TermsCheckInput = () => {
  const { useTermsCheck, privacyTermsCheck, useTermsCheckHandler, privacyTermsCheckHandler } = useJoinState();

    return (
      <label className="form-control w-full mt-5 mb-9">
      <div className="flex flex-col">
        <label className='font-bold'>약관 동의</label>
      </div>
      <div className="flex justify-between items-center mt-2">
        <label htmlFor="termsOne">이용약관 동의 (필수)</label>
          <input type="radio" className='radio radio-primary' checked={useTermsCheck} onClick={useTermsCheckHandler} />
      </div>
      {!useTermsCheck ? <span className="text-red-500">이용약관에 동의해 주세요.</span> : <span className='h-6'></span> }
      <div className="flex justify-between items-center mt-2">
        <label htmlFor="termsTwo">개인정보 수집, 이용 동의 (필수)</label>
          <input type="radio" className='radio radio-primary' checked={privacyTermsCheck} onClick={privacyTermsCheckHandler} />

      </div>  
       {!privacyTermsCheck ? <span className="text-red-500">개인정보 수집, 이용에 동의해 주세요.</span> : <span className='h-6'></span> }
    </label>
    );
};

export default TermsCheckInput;
