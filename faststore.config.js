
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "chrisf",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "COP",
      symbol: "$",
    },
    locale: "es-CO",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "COL",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://chrisfast.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/tecnologia",
    search: "/s?q=Gen%C3%A9rico",
    pdp: "/acer-aspire-5-slim-laptop---windows-10-123751354/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/acer-aspire-5-slim-laptop---windows-10-123751354/p",
      collection: "/tecnologia",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/acer-aspire-5-slim-laptop---windows-10-123751354/p",
      collection: "/tecnologia",
      collection_filtered: "/tecnologia/?category-1=tecnologia&brand=Gen%C3%A9rico&facets=category-1%2Cbrand%27",
      search: "/s?q=Gen%C3%A9rico",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-MGTFTLXT",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://chrisfast.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
