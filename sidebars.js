// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: 'Security Console',
      collapsed: false,
      items: ['intro', 'download', 'features', 'quick-start'],
    },
    {
      type: 'html',
      value: '<hr class="sidebar-hr" />',
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      items: ['faq', 'troubleshooting'],
    },
  ],
};

export default sidebars;
