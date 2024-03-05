import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/ErrorPage';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import LoadingPage from './pages/LoadingPage';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const Appointment = React.lazy(() => import('./pages/Appointment'));
const History = React.lazy(() => import('./pages/History'));
const Articles = React.lazy(() => import('./pages/Articles'));
const Profile = React.lazy(() => import('./pages/Profile'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <React.Suspense fallback={<LoadingPage />}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: '/Appointment',
        element: (
          <React.Suspense fallback={<LoadingPage />}>
            <Appointment />
          </React.Suspense>
        ),
      },
      {
        path: '/History',
        element: (
          <React.Suspense fallback={<LoadingPage />}>
            <History />
          </React.Suspense>
        ),
      },
      {
        path: '/Articles',
        element: (
          <React.Suspense fallback={<LoadingPage />}>
            <Articles />
          </React.Suspense>
        ),
      },
      {
        path: '/Profile',
        element: (
          <React.Suspense fallback={<LoadingPage />}>
            <Profile />
          </React.Suspense>
        ),
      },
      {
        path: '/Login',
        element: (
          <React.Suspense fallback={<LoadingPage />}>
            <LoginPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
