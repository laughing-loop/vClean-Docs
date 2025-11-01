// @ts-check
// V-Clean Enterprise Documentation Site

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'V-Clean Enterprise',
  tagline: 'Professional USB/Drive Cleaning Utility for Windows',
  favicon: 'img/favicon.ico',

  url: 'https://laughing-loop.github.io',
  baseUrl: '/vClean-Docs/',

  organizationName: 'laughing-loop',
  projectName: 'vClean-Docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/laughing-loop/vClean-Docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/vclean-social-card.png',
      navbar: {
        title: 'V-Clean Enterprise',
        logo: {
          alt: 'V-Clean Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Home',
            activeBaseRegex: "^/$",
          },
          {
            to: '/download',
            position: 'left',
            label: 'Download',
          },
          {
            to: '/features',
            position: 'left',
            label: 'Features',
          },
          {
            to: '/faq',
            position: 'left',
            label: 'FAQ',
          },
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            items: [
              {
                label: 'Quick Start',
                to: '/quick-start',
              },
              {
                label: 'Troubleshooting',
                to: '/troubleshooting',
              },
            ],
          },
          {
            href: 'https://github.com/laughing-loop/vClean-Utility',
            className: 'github-button',
            position: 'right',
            label: 'GitHub',
            title: 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
