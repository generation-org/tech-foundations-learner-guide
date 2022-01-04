// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Foundations Learner Guide',
  tagline: 'An Integrated Tech Industry Foundations Course',
  url: 'https://generation-org.github.io',
  baseUrl: '/tech-foundations-learner-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'generation-org', // Usually your GitHub org/user name.
  projectName: 'tech-foundations-learner-guide', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/generation-org/tech-foundations/edit/main/',
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tech Foundations',
        items: [
          {
            type: 'doc',
            docId: 'programming/index',
            position: 'left',
            label: 'Programming',
          },
          {
            type: 'doc',
            docId: 'linux/index',
            position: 'left',
            label: 'Linux',
          },
          {
            type: 'doc',
            docId: 'computing/index',
            position: 'left',
            label: 'Computing',
          },
          {
            type: 'doc',
            docId: 'networking/index',
            position: 'left',
            label: 'Networking',
          },
          {
            type: 'doc',
            docId: 'security/index',
            position: 'left',
            label: 'Security',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Generation: You Employed, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
