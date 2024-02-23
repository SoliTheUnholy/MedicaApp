import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/ErrorPage';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
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
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: '/Appointment',
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Appointment />
          </React.Suspense>
        ),
      },
      {
        path: '/History',
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <History />
          </React.Suspense>
        ),
      },
      {
        path: '/Articles',
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Articles />
          </React.Suspense>
        ),
      },
      {
        path: '/Profile',
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Profile />
          </React.Suspense>
        ),
      },
      {
        path: '/Login',
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
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
