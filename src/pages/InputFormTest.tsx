import InputForm from '../components/common/InputForm.tsx';
import { searchUser } from '../apis/authApis.ts';
import { useState } from 'react';

function TestInputForm() {
  const [email, setEamil] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEamil(event.target.value);
  };

  const onClick = () => {
    searchUser(email).then((value) => {
      console.log(value);
    });
  };

  return (
    <div>
      <InputForm title="이름" placeholder="이름을 입력하세요" hint="hint text" onChange={onChange} />
      <InputForm title={'닉네임'} placeholder={'닉네임을 입력하세요'} hint={'hit text'} onChange={onChange} />
      <button className="btn btn-outline btn-primary w-full" onClick={onClick}>
        회원 검색 버튼
      </button>
    </div>
  );
}

export default TestInputForm;
