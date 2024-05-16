import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChangePasswordPage from './pages/ChangePasswordPage.tsx';
import { JoinPage, LoginPage, NotFound, Policy, ResetPwPage } from './pages/index.ts';
import ProtectedRoute from './providers/ProtectedRoute.tsx';
import EditGroupSchedule from './pages/EditGroupSchedulePage.tsx';
import AddGroupSchedulePage from './pages/AddGroupSchedulePage.tsx';
import GroupSchedulePage from './pages/GroupSchedulePage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import App from '@/App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/group/:groupId/edit/:scheduleId',
        element: <EditGroupSchedule />,
      },
      {
        path: '/group/:groupId',
        element: <GroupSchedulePage />,
      },
      {
        path: '/add-group',
        element: <AddGroupSchedulePage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/join',
    element: <JoinPage />,
  },
  {
    path: '/editPw',
    element: <ResetPwPage />,
  },
  {
    path: '/change-password',
    element: <ChangePasswordPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },

  {
    path: '/policy',
    children: [
      {
        path: 'personalInfo',
        element: <Policy.PersonalInfoPage />,
      },
      {
        path: 'usecondition',
        element: <Policy.UseConditionPage />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
);
