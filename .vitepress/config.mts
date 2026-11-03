import { defineConfig } from 'vitepress';

const SITE = 'https://docs.zalithlauncher.cn';
const OG_IMAGE = `${SITE}/zl_title.png`;
const DESC_ZH = 'Zalith Launcher 官方文档：安装、配置、常见问题与开发指南，在 Android 设备上游玩 Minecraft: Java Edition。';
const DESC_EN = 'Official Zalith Launcher documentation: installation, configuration, troubleshooting and development guides for Minecraft: Java Edition on Android.';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Zalith Launcher',
  description: DESC_ZH,
  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans',
      title: 'Zalith Launcher 文档',
      description: DESC_ZH,
      head: [
        ['link', { rel: 'alternate', hreflang: 'zh-Hans', href: `${SITE}/` }],
        ['link', { rel: 'alternate', hreflang: 'en', href: `${SITE}/en/` }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: `${SITE}/` }],
      ],
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Zalith Launcher Docs',
      description: DESC_EN,
      head: [
        ['link', { rel: 'alternate', hreflang: 'en', href: `${SITE}/en/` }],
        ['link', { rel: 'alternate', hreflang: 'zh-Hans', href: `${SITE}/` }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: `${SITE}/` }],
      ],
    },
  },
  sitemap: {
    hostname: SITE
  },
  head: [
    ['link', { rel: 'icon', href: '/zl_icon.webp' }],
    ['meta', { name: 'keywords', content: 'zl,zl2,zalith,zalithlauncher,minecraft,mc,zl官网,zl下载,zl启动器,文档,docs' }],
    ['meta', { name: 'theme-color', content: '#102349' }],
    // Open Graph：分享卡片
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Zalith Launcher Docs' }],
    ['meta', { property: 'og:title', content: 'Zalith Launcher 文档' }],
    ['meta', { property: 'og:description', content: DESC_ZH }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:alt', content: 'Zalith Launcher' }],
    ['meta', { property: 'og:url', content: `${SITE}/` }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    // Twitter / X
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Zalith Launcher 文档' }],
    ['meta', { name: 'twitter:description', content: DESC_ZH }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
  ],
  themeConfig: {
    notFound: {
      title: '404',
      quote: 'Page Not Found',
      linkText: 'Go Home'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZalithLauncher' },
      { icon: 'discord', link: 'https://discord.gg/e7C4kytRgK' }
    ],
    logo: '/zl_icon.webp',
    search: {
      provider: 'local',
    }
  },
  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    },
    build: {
      rollupOptions: {
        external: [/^server\/.*/]
      }
    }
  }
})
