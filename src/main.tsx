import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/index.css';
import App from './App.tsx';
import TextInputForm from './pages/InputFormTest.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChangePasswordPage from './pages/ChangePasswordPage.tsx';
import { JoinPage, LoginPage, ResetPwPage, NotFound, Policy } from './pages/index.ts';
import ProtectedRoute from './providers/ProtectedRoute.tsx';
import EditGroupSchedule from './pages/EditGroupSchedulePage.tsx';
import AddGroupSchedulePage from './pages/AddGroupSchedulePage.tsx';
import GroupSchedulePage from './pages/GroupSchedulePage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        ),
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
        path: '/test',
        children: [
          {
            path: 'inputForm',
            element: <TextInputForm />,
          },
        ],
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
      {
        path: '/profile',
        element: <ProfilePage />,
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
