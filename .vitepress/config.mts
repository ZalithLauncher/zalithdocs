import { defineConfig } from 'vitepress';
import enThemeConfig from '../locales/en';

// https://vitepress.dev/reference/site-config
//
// 中文支持已从构建中移除：中文文档源文件（docs/、zh 首页、README.md、locales/zh.ts、
// config.ts）仍保留在仓库中，但不再参与构建，产物只有 en/ 下的英文站点。
// Chinese docs are no longer built. The Chinese sources (docs/, the Chinese homepage,
// README.md, locales/zh.ts, config.ts) are kept in the repository, but the build output
// only contains the English site.
//
// 恢复中文站点 / To restore the Chinese site:
//   1. 删除下面的 srcExclude 与 rewrites
//   2. 恢复 locales: { root: { label: '简体中文' }, en: { label: 'English' } } 及原 themeConfig
//   3. 把 index.md 换回中文首页，并把 en/ 内页面链接改回 /en/... 前缀
//      （见本 PR 对 index.md、en/docs/*.md 与 locales/en.ts 的改动）
export default defineConfig({
  lang: 'en-US',
  title: "Zalith Launcher",
  description: 'Play Minecraft: Java Edition on Android devices',
  lastUpdated: true,
  // 中文页面不参与构建（docs/ 中文文档、中文 README.md）；根目录 index.md 已换成英文首页，
  // 因此 en/index.md 不再单独构建，避免与首页重写后路径冲突。
  srcExclude: ['docs/**', 'README.md', 'en/index.md', 'locales/zh.ts', 'config.ts'],
  // 英文页面由 /en/xxx 重写为根路径 /xxx，保持对外 URL 不变
  // 根目录 index.md 已是英文首页，会被下面的规则覆盖为同名，故无需排除
  rewrites: {
    'en/:path*': ':path*',
  },
  sitemap: {
    hostname: 'https://docs.zalithlauncher.cn'
  },
  head: [
    ['link', { rel: 'icon', href: '/zl_icon.webp' }],
    ['meta', { name: 'keywords', content: "zl,zl2,zalith,zalithlauncher,minecraft,mc"}]
  ],
  themeConfig: {
    ...enThemeConfig,
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
      ...enThemeConfig.search,
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
