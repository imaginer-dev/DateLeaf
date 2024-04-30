import { useJoinState } from '../../stores/joinStore';

const JoinButton = () => {
  const { name, phone, email, password, pwCheck, useTermsCheck, privacyTermsCheck } = useJoinState();

  const onClick = () => {
    console.log('name: ', name);
    console.log('phone: ', phone);
    console.log('email: ', email);
    console.log('password: ', password);
    console.log('pwCheck: ', pwCheck);
    console.log('useTermsCheck: ', useTermsCheck);
    console.log('privacyTermsCheck: ', privacyTermsCheck);
  };

  return (
    <button type={'submit'} onClick={onClick} className="btn btn-outline btn-primary w-full">
      회원가입 하기
    </button>
  );
};

export default JoinButton;
