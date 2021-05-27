/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nexivil Document',
  tagline: 'Nexivil Documents are cool',
  url: 'https://nexivil.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nexivil', // Usually your GitHub org/user name.
  projectName: 'nexivil-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nexivil Document',
      logo: {
        alt: 'Nexivil Document Logo',
        // src: 'img/logo.svg',
        // src: 'img/whitelogo.svg',
        src: 'img/blacklogo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Manual',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Nexivil-Inc/nexivil-doc',
          label: 'GitHub',
          position: 'right',
        },
       
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Manual',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Nexivil-Inc/nexivil-doc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nexivil, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
