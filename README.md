# Zalith Docs

Zalith Launcher 官方文档站源码仓库，基于 VitePress 构建，部署于 EdgeOne Pages。
Source code repository of the official Zalith Launcher documentation site, built with VitePress and deployed on EdgeOne Pages.

访问地址 / Live site: [docs.zalithlauncher.cn](https://docs.zalithlauncher.cn)

## 可用脚本 / Scripts

```bash
# 启动开发服务器 / Start dev server
pnpm docs:dev

# 构建生产版本 / Build for production
pnpm docs:build

# 本地预览构建产物 / Preview production build locally
pnpm docs:preview
```

## 项目结构 / Project Structure

```
zalithdocs/
├── .vitepress/     # VitePress 配置与主题 / VitePress config & theme
├── docs/           # 中文文档 / Chinese docs
├── en/             # 英文文档 / English docs
├── locales/        # 国际化配置 / i18n locales
├── public/         # 静态资源 / Static assets
└── index.md        # 首页 / Homepage
```

## 参与贡献 / Contributing

欢迎在 GitHub 上发起 PR 为文档提出宝贵意见！
Feel free to open a PR on GitHub to improve the documentation!

## 许可证 / License

与主项目保持一致 / Same as the main project.
