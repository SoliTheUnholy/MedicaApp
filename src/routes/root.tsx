import IconButton from '@material-tailwind/react/components/IconButton';
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  const [here, setHere] = useState(window.location.pathname);
  useEffect(() => {
    setHere(window.location.pathname);
  });
  return (
    <>
      <div className="h-screen">
        <nav className="shadow-md p-2.5 fixed bottom-0 w-screen">
          <ul className="flex justify-evenly font-bold">
            <li>
              <Link to={'/'} onClick={() => setHere('')}>
                <IconButton variant="text">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path
                      fill={here == '/' ? 'blue' : 'currentColor'}
                      d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"
                    ></path>
                  </svg>
                </IconButton>
              </Link>
            </li>
            <li>
              <Link to={'/Appointment'} onClick={() => setHere('')}>
                <IconButton variant="text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill={here == '/Appointment' ? 'blue' : 'currentColor'}
                      d="M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1"
                    />
                  </svg>
                </IconButton>
              </Link>
            </li>
            <li>
              <Link to={'/History'} onClick={() => setHere('')}>
                <IconButton variant="text">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path
                      fill={here == '/History' ? 'blue' : 'currentColor'}
                      d="M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8a.5.5 0 0 0-.36-.85H6c0-3.9 3.18-7.05 7.1-7c3.72.05 6.85 3.18 6.9 6.9c.05 3.91-3.1 7.1-7 7.1c-1.61 0-3.1-.55-4.28-1.48a.994.994 0 0 0-1.32.08c-.42.42-.39 1.13.08 1.49A8.858 8.858 0 0 0 13 21c5.05 0 9.14-4.17 9-9.26c-.13-4.69-4.05-8.61-8.74-8.74m-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26c.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74"
                    ></path>
                  </svg>
                </IconButton>
              </Link>
            </li>
            <li>
              <Link to={'/Articles'} onClick={() => setHere('')}>
                <IconButton variant="text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill={here == '/Articles' ? 'blue' : 'currentColor'}
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1m3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"
                    />
                  </svg>
                </IconButton>
              </Link>
            </li>
            <li>
              <Link to={'/Profile'} onClick={() => setHere('')}>
                <IconButton variant="text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill={here == '/Profile' ? 'blue' : 'currentColor'}
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"
                    />
                  </svg>
                </IconButton>
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
