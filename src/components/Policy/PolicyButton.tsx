import { usePolicyState } from '../../stores/policyStore';

const PolicyButton = () => {
  const { check } = usePolicyState();

  const onClick = () => {
    console.log(check);
  };

  return (
    <div className="absolute bottom-12 w-full max-w-5xl">
      <button type={'submit'} onClick={onClick} className="btn btn-outline btn-primary display m-auto">
        동의하기
      </button>
    </div>
  );
};

export default PolicyButton;
