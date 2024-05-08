import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/index.css';
import App from './App.tsx';
import TextInputForm from './pages/InputFormTest.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChangePasswordPage from './pages/ChangePasswordPage.tsx';
import { JoinPage, LoginPage, ResetPwPage, NotFound, Policy } from './pages/index.ts';
import ProtectedRoute from './providers/ProtectedRoute.tsx';

import UserInvite from './components/common/UserInvite.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
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
      {
        path: 'UserInvite',
        element: <UserInvite />,
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
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
