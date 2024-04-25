import InputForm from '../components/common/InputForm.tsx';

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};
function TestInputForm() {
  return (
    <div>
      <InputForm title="이름" placeholder="이름을 입력하세요" hint="hint text" onChange={onChange} />
    </div>
  );
}

export default TestInputForm;
