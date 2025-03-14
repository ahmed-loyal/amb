import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// insight analytics
const InsightAnalytics = Loadable(lazy(() => import('pages/insight-analytics/index')));

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
    },
    {
      path: 'insight-analytics',
      element: <InsightAnalytics />
    }
  ]
};

export default MainRoutes;
