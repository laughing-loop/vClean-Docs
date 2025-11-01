/**
 * V-Clean Enterprise Documentation Sidebar
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'intro',
    'download',
    'features',
    'faq',
    {
      type: 'html',
      value: '<hr class="sidebar-hr" />',
    },
    {
      type: 'category',
      label: 'Documentation',
      items: [
        'quick-start',
        'troubleshooting',
      ],
    },
  ],
};

export default sidebars;
