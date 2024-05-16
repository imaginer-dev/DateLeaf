import { useSignOut } from '@/react-queries/useSignOut.ts';
import { useNavigate } from 'react-router-dom';

export default function SideBarSignOutButton() {
  const { mutate } = useSignOut();
  const navigate = useNavigate();

  const onClick = () => {
    mutate(undefined, {
      onSuccess: () => {
        navigate('/login');
      },
    });
  };

  return (
    <button onClick={onClick} className={'btn btn-error font-bold'}>
      Sign Out
    </button>
  );
}
