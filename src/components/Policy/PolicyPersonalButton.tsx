import { useNavigate } from 'react-router-dom';

const PolicyPersonalButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/join', { replace: true, state: { privacyTerms: true } });
  };

  return (
    <div className="absolute bottom-12 w-10/12 md:w-11/12">
      <button type={'submit'} onClick={onClick} className="btn btn-outline btn-primary m-auto block w-full max-w-md">
        동의하기
      </button>
    </div>
  );
};

export default PolicyPersonalButton;
