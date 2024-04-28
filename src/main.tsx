import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/index.css';
import App from './App.tsx';
import TextInputForm from './pages/InputFormTest.tsx';
import { NotFound } from './pages/Notfound.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JoinPage from './pages/JoinPage.tsx';
import LoginPage from './pages/LoginPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'join',
    element: <JoinPage />,
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
