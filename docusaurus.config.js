// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Conecte seu sistema a múltiplas adquirentes com facilidade',
  // tagline: 'A solução completa para integrar pagamentos com crédito, débito e serviços adicionais — com apenas uma integração.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'connecttef', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Connect TEF',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        }
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Integração',
          //   items: [
          //     {
          //       label: 'Troca de arquivos',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'API',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'DLL',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'SDK (Android)',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Intent (Android)',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     // {
          //     //   label: 'Stack Overflow',
          //     //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     // },
          //     // {
          //     //   label: 'Discord',
          //     //   href: 'https://discordapp.com/invite/docusaurus',
          //     // },
          //     // {
          //     //   label: 'X',
          //     //   href: 'https://x.com/docusaurus',
          //     // },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     // {
          //     //   label: 'Blog',
          //     //   to: '/blog',
          //     // },
          //     // {
          //     //   label: 'GitHub',
          //     //   href: 'https://github.com/facebook/docusaurus',
          //     // },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Connect TEF`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
