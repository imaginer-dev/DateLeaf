import { useGetProfile } from '@/react-queries/userGetProfile';

const ProfilePage = () => {
    const { data: user, error, isLoading, isError } = useGetProfile();
    console.log(user)

    if (isError) {
        // TODO: 추후 에러 처리
        console.error(error);
    }

    return (
      <div>
        {isLoading && <span className="loading" />}
        <h1>프로필</h1>
        <p>여기는 프로필 페이지입니다.</p>
      </div>
    );
  };
  
  export default ProfilePage;