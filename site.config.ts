import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '2017582413f5804a9762daa8fd7c6657',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Gavin 星舱展示',
  author: 'Gavin Lee',
  description: '这是由 Notion 驱动的星舱产品展示网站',
  domain: 'notion.mobilehouse.asia',

  // default notion icon and cover images for site-wide consistency (optional)
  defaultPageIcon: 'https://i.postimg.cc/G3tYDFp6/202504112221048.png',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  isRedisEnabled: false,

  // open graph metadata (optional)

  // social usernames (optional)


  // map of notion page IDs to URL paths (optional)
  pageUrlOverrides: null,

  // navigation style
  navigationStyle: 'default'
})
