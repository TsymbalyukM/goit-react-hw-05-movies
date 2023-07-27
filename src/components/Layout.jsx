import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from './Loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink  to="/">Home</NavLink>
          <NavLink  to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
//.