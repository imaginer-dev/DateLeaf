import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/index.css';
import App from './App.tsx';
import TextInputForm from './pages/InputFormTest.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { JoinPage, LoginPage, EditPwPage, NotFound, Policy } from './pages/index.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    element: <EditPwPage />,
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
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
