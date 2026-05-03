// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'V-Clean Security Console',
  tagline: 'Endpoint security console for Windows operators',
  favicon: 'img/favicon.ico',

  url: 'https://laughing-loop.github.io',
  baseUrl: '/vClean-Docs/',

  organizationName: 'laughing-loop',
  projectName: 'vClean-Docs',

  onBrokenLinks: 'warn',
  trailingSlash: false,

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
      metadata: [
        {
          name: 'description',
          content:
            'V-Clean Security Console is a Windows endpoint security console preview with a .NET 8 WPF UI, named-pipe agent communication, scan workflows, quarantine controls, and a self-contained setup executable.',
        },
        {
          name: 'keywords',
          content:
            'V-Clean, V-Clean Security Console, Windows endpoint security, .NET 8 WPF security console, named pipe agent, quarantine console, USB security, malware cleanup, open source Windows security utility',
        },
        { name: 'author', content: 'LaughingLoop' },
        { property: 'og:title', content: 'V-Clean Security Console' },
        {
          property: 'og:description',
          content:
            'Installable Windows security-console preview with live agent IPC, scan center, quarantine controls, dark and light UX, and self-contained win-x64 packaging.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://laughing-loop.github.io/vClean-Docs/' },
        { property: 'og:image', content: 'https://laughing-loop.github.io/vClean-Docs/img/screenshot-main.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'V-Clean Security Console' },
        {
          name: 'twitter:description',
          content:
            'A cleaner enterprise Windows security-console preview with setup.exe distribution and live agent communication.',
        },
        { name: 'twitter:image', content: 'https://laughing-loop.github.io/vClean-Docs/img/screenshot-main.png' },
        { name: 'robots', content: 'index, follow' },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'security-console-preview',
        content:
          'V-Clean Security Console v3.1.0 preview is available as a self-contained Windows setup package.',
        backgroundColor: '#0b1220',
        textColor: '#f8fafc',
        isCloseable: true,
      },
      image: 'img/screenshot-main.png',
      navbar: {
        title: 'V-Clean',
        logo: {
          alt: 'V-Clean logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Overview',
            activeBaseRegex: '^/$',
          },
          {
            to: '/download',
            position: 'left',
            label: 'Download',
          },
          {
            to: '/features',
            position: 'left',
            label: 'Platform',
          },
          {
            to: '/quick-start',
            position: 'left',
            label: 'Quick Start',
          },
          {
            to: '/troubleshooting',
            position: 'left',
            label: 'Support',
          },
          {
            href: 'https://github.com/laughing-loop/vClean-Utility/releases/tag/v3.1.0',
            label: 'Release',
            position: 'right',
            className: 'navbar-release-link',
          },
          {
            href: 'https://github.com/laughing-loop/vClean-Utility',
            className: 'github-button',
            position: 'right',
            label: 'GitHub',
            title: 'Public release repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              { label: 'Download', to: '/download' },
              { label: 'Platform', to: '/features' },
              { label: 'Quick Start', to: '/quick-start' },
            ],
          },
          {
            title: 'Operations',
            items: [
              { label: 'FAQ', to: '/faq' },
              { label: 'Troubleshooting', to: '/troubleshooting' },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/laughing-loop/vClean-Utility/issues',
              },
            ],
          },
          {
            title: 'Build',
            items: [
              {
                label: 'Public Release Repository',
                href: 'https://github.com/laughing-loop/vClean-Utility',
              },
              {
                label: 'Latest Preview Release',
                href: 'https://github.com/laughing-loop/vClean-Utility/releases/tag/v3.1.0',
              },
            ],
          },
        ],
        copyright: `Copyright (c) ${new Date().getFullYear()} LaughingLoop. V-Clean Security Console is maintained in the open.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.nightOwl,
      },
    }),
};

export default config;
