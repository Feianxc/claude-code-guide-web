import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Claude Code 中文教程',
  description: '从零基础到企业实战的系统化教程',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#7c3aed' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Claude Code 中文教程' }],
    ['meta', { name: 'og:description', content: '从零基础到企业实战的系统化教程' }],
  ],

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/images/二维码基础款.png',
    siteTitle: 'Claude Code 中文教程',

    nav: [
      { text: '首页', link: '/' },
      { text: '安装指南', link: '/01-Claude-Code完整安装指南' },
      { text: '基础使用', link: '/02-基础使用完整指南' },
      { text: '快速导航', link: '/快速导航卡' },
      {
        text: '更多教程',
        items: [
          { text: 'Commands系统', link: '/03-Commands系统完整指南' },
          { text: 'MCP集成', link: '/04-MCP集成完整指南' },
          { text: 'Hooks系统', link: '/05-Hooks系统完整指南' },
          { text: 'Skills定制', link: '/06-Skills定制完整指南' },
          { text: 'Plugins生态', link: '/07-Plugins生态完整指南' },
          { text: 'Agent-SDK', link: '/08-Agent-SDK完整指南' },
          { text: '综合实战', link: '/09-综合实战完整指南' },
          { text: '企业实战', link: '/10-企业实战完整指南' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/KimYx0207/Claude-Code-Guide-Zh' },
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs',
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      sortMenusByFrontmatterOrder: true,
      excludeFiles: ['index.md'],
      collapsed: false,
    }),

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: '目录',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KimYx0207/Claude-Code-Guide-Zh' },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright 2024-2025 老金',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
      },
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 自定义容器
    tip: { label: '提示' },
    warning: { label: '警告' },
    danger: { label: '危险' },
    info: { label: '信息' },
  },
})
