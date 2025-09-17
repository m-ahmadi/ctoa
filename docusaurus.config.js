// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'cTrader OpenAPI Community Docs',
  tagline: 'Things',
  
  url: 'https://m-ahmadi.github.io/',
  baseUrl: '/ctoa/',
  
  organizationName: 'm-ahmadi',
  projectName: 'ctoa',
  
  trailingSlash: false,
  favicon: '/img/favicon.ico',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  /* i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
        calendar: 'persian',
        path: 'fa',
      },
    },
  }, */

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/m-ahmadi/ctoa/blob/main/',
          /* sidebarItemsGenerator: async function ({defaultSidebarItemsGenerator, ...args}) {
            const items = await defaultSidebarItemsGenerator(args);
            // const insertIndex = 3;
            // items.splice(insertIndex, 0, {
            //   type: 'link',
            //   label: 'Playground',
            //   href: 'https://m.ahmadi-github.io/ctoa/playground',
            // });
            function injectIntoCategory(items) {
              for (const item of items) {
                if (item.type === 'category' && item.label === 'Contacting the API') {
                  const index = 10;
                  item.items.splice(index, 0, {
                    type: 'link',
                    label: 'Playground',
                    href: 'https://m.ahmadi-github.io/ctoa/playground',
                  });
                }
                if (item.items) injectIntoCategory(item.items);
              }
            }
            injectIntoCategory(items);
            return items;
          }, */
          
        },
        blog: false,
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {},
     /*  navbar: {
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      }, */
      footer: {},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        {name: 'google-site-verification', content: 'A3GEBO4Wur6jxNzR-hUJY4pBR2h1xQM3nFy4JC774p8'},
        {name: 'keywords', content: 'ctrader, openapi, docs, trading, forex, crypto'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      
      algolia: {
        appId: 'FNOOURBTNR',
        apiKey: '7017cebb0471e7945ace6e072f62b0a5',
        indexName: 'Documentation Website',
        contextualSearch: false,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,
      },
    }),
};

export default config;
