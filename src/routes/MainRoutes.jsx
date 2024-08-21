import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ogam analytics
// const OgAmAnalytics = Loadable(lazy(() => import('pages/ogam-analytics/index')));

// data entry
const DataEntry = Loadable(lazy(() => import('pages/data-entry/index')));

// users
// const Users = Loadable(lazy(() => import('pages/users/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'data-entry',
      element: <DataEntry />
    }
  ]
};

export default MainRoutes;
