import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vClean-Docs/',
    component: ComponentCreator('/vClean-Docs/', '8b5'),
    routes: [
      {
        path: '/vClean-Docs/',
        component: ComponentCreator('/vClean-Docs/', 'a90'),
        routes: [
          {
            path: '/vClean-Docs/',
            component: ComponentCreator('/vClean-Docs/', '413'),
            routes: [
              {
                path: '/vClean-Docs/download',
                component: ComponentCreator('/vClean-Docs/download', 'ea7'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/vClean-Docs/faq',
                component: ComponentCreator('/vClean-Docs/faq', '9bd'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/vClean-Docs/features',
                component: ComponentCreator('/vClean-Docs/features', '58a'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/vClean-Docs/quick-start',
                component: ComponentCreator('/vClean-Docs/quick-start', '32f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/vClean-Docs/troubleshooting',
                component: ComponentCreator('/vClean-Docs/troubleshooting', 'a7b'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/vClean-Docs/',
                component: ComponentCreator('/vClean-Docs/', '6b9'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
