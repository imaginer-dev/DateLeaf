import { useGetProfile } from '@/react-queries/userGetProfile';
import SideBarGroupList from './SideBarGroupList';
import SideBarProfile from './SideBarProfile';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SideBarSignOutButton from '@/components/common/SideBar/SideBarSignOutButton.tsx';

const HamburgerButton = () => {
  const { data: user, isLoading, isError } = useGetProfile();

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  return isLoading ? (
    <div className="loading"></div>
  ) : (
    <header className="relative z-10">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <div className="drawer-side lg:w-80">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu min-h-full w-80 flex-col justify-between bg-base-200 p-4">
            <div>
              <SideBarProfile imageUrl={user?.image_url ?? null} userName={user?.user_name ?? ''} />
              <SideBarGroupList userId={user?.id ?? ''} />
            </div>
            <SideBarSignOutButton />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HamburgerButton;
