import { usePolicyState } from '../../stores/policyStore';

const PolicyButton = () => {
  const { check } = usePolicyState();

  const onClick = () => {
    console.log(check);
  };

  return (
    <div className="absolute bottom-12 w-10/12 md:w-11/12">
      <button type={'submit'} onClick={onClick} className="btn btn-outline btn-primary m-auto block w-full max-w-md">
        동의하기
      </button>
    </div>
  );
};

export default PolicyButton;
