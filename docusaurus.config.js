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

  onBrokenLinks: 'warn',
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
      metadata: [
        {name: 'keywords', content: 'vclean, v-clean, v clean, vclean enterprise, vcleaner, v cleaner, vcleen, vkleen, vclene, USB cleaner, USB virus remover, USB malware scanner, pendrive cleaner, pendrive virus remover, pendrive shortcut virus, shortcut virus remover, shortcut virus cleaner, remove shortcut virus, pendrive shortcut virus remover, USB shortcut virus, flash drive shortcut virus, autorun virus remover, autorun.inf virus, autorun virus cleaner, recycler virus, recycler folder virus, drive cleaner, disk cleaner, temp file cleaner, temporary files remover, junk file cleaner, Windows cleaner, Windows optimizer, system cleaner, PC cleaner, computer cleaner, free cleaner, open source cleaner, portable cleaner, USB drive cleaner, external drive cleaner, flash drive cleaner, memory stick cleaner, thumb drive cleaner, malware removal tool, virus scanner, system optimization, disk cleanup, storage cleaner, cache cleaner, Windows 10 cleaner, Windows 11 cleaner, PowerShell utility, free USB cleaner, best USB cleaner, USB cleaning software, drive cleaning tool, system maintenance, PC optimization, computer maintenance, free system cleaner, lightweight cleaner, fast cleaner, safe cleaner, trusted cleaner, pen drive virus, pen drive cleaner, how to remove shortcut virus, remove virus from pendrive, clean pendrive virus, USB virus protection, USB security tool'},
        {name: 'description', content: 'V-Clean Enterprise - Free USB/pendrive cleaner and shortcut virus remover for Windows 10/11. Remove shortcut virus, autorun virus, temporary files, junk files, malware. Lightweight (117 KB), portable, safe. Download now!'},
        {name: 'author', content: 'LaughingLoop'},
        {property: 'og:title', content: 'V-Clean Enterprise - Free USB & Drive Cleaner for Windows'},
        {property: 'og:description', content: 'Professional USB and drive cleaning utility. Remove temp files, detect malware, optimize Windows 10/11. Free, open-source, portable (117 KB). Download now!'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://laughing-loop.github.io/vClean-Docs/'},
        {property: 'og:image', content: 'https://laughing-loop.github.io/vClean-Docs/img/screenshot-main.png'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'V-Clean Enterprise - Free USB & Drive Cleaner'},
        {name: 'twitter:description', content: 'Free, open-source USB cleaner for Windows. Remove junk files, detect malware, optimize your PC. Only 117 KB!'},
        {name: 'twitter:image', content: 'https://laughing-loop.github.io/vClean-Docs/img/screenshot-main.png'},
        {name: 'robots', content: 'index, follow'},
        {name: 'googlebot', content: 'index, follow'},
        {name: 'bingbot', content: 'index, follow'},
        {name: 'language', content: 'English'},
        {name: 'revisit-after', content: '7 days'},
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/screenshot-main.png',
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
