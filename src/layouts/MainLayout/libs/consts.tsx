import { ROUTER } from '@/libs/router';

export const MENU_NAVS = [
  { title: 'Agents Dashboard', link: ROUTER.AGENTS_DASHBOARD },
  { title: 'Battles Management', link: ROUTER.BATTLES_MANAGEMENT },
];

import { Icons } from '@/assets/icons';

export const sidebars: {
  iconActive?: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  link: string;
  line?: boolean;
}[] = [
  {
    icon: <Icons.home />,
    title: 'Dashboard',
    link: ROUTER.HOME,
    iconActive: null,
  },

  // {
  //   line: true,
  // },
  {
    icon: <Icons.home />,
    title: 'Categories',
    link: ROUTER.CATEGORY_MANAGEMENT,
  },
  {
    icon: <Icons.home />,
    title: 'Brand Management',
    link: ROUTER.BRAND_MANAGEMENT,
  },
  {
    icon: <Icons.home />,
    title: 'Product Management',
    link: ROUTER.PRODUCT_MANAGEMENT,
  },
  // {
  //   icon: <Icons.mbPage />,
  //   title: 'M & B',
  //   link: ROUTE['CRON-JOB'],
  //   access: [IPermissions['SUPER-ADMIN_ADMIN'], IPermissions['GLOBAL-SUPER-ADMIN_ADMIN']],
  // },
  // {
  //   icon: <Icons.account />,
  //   title: 'Accounts',
  //   link: ROUTE.ADMIN_USER_MANAGEMENT,
  //   access: [IPermissions['SUPER-ADMIN_ADMIN'], IPermissions['GLOBAL-SUPER-ADMIN_ADMIN']],
  // },
  // {
  //   icon: <Icons.developerZone />,
  //   title: 'Developer Zone',
  //   link: ROUTE.ADMIN_DEVELOPER_ZONE,
  //   access: [IPermissions['GLOBAL-SUPER-ADMIN_ADMIN']],
  // },
];
