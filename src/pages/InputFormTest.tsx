import InputForm from '../components/common/InputForm.tsx';

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};
function TestInputForm() {
  return (
    <div>
      <InputForm title="이름" placeholder="이름을 입력하세요" hint="hint text" onChange={onChange} />
      <InputForm
        title={'패스워드'}
        placeholder={'패스워드를 입력하세요'}
        hint={'hit text'}
        onChange={onChange}
        type={'password'}
      />
    </div>
  );
}

export default TestInputForm;
