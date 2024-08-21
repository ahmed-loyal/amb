// assets
import { DashboardOutlined, UserOutlined, ProjectOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  UserOutlined,
  ProjectOutlined,
  FundProjectionScreenOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/users',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'data entry',
      title: 'Data Entry',
      type: 'item',
      url: '/data-entry',
      icon: icons.ProjectOutlined,
      breadcrumbs: false
    },
    {
      id: 'og am',
      title: 'Og AM Analytics',
      type: 'item',
      url: '/ogam-analytics',
      icon: icons.FundProjectionScreenOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
