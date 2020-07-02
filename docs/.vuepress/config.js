module.exports = {
  title: '我愚蠢的欧豆豆',
  description: '你很弱，为什么这么弱，因为你的憎恨还不够！',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/icons/logo.png' }], // favicon图标
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon' }]
  ],
  serviceWorker: true, // 开启PWA
  base: '/note-github/', // 部署到GitHub时的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    // 内置搜索
    search: true,
    searchMaxSuggestions: 10,

    // 导航栏
    nav: [
      {
        text: '笔记',
        items: [
          { text: 'Java', link: '/Java/' },
          { text: 'NoSQL', link: '/NoSQL/' },
          { text: 'HTTP', link: '/HTTP/' }
        ],
      },
      { text: 'Project', link: '/Project/' },
      { text: 'Resume', link: '/Resume/' },
      { text: 'GitHub', link: 'https://github.com/hubingliang' },
    ],
    // 侧边栏
    sidebar: {
      '/Java/': [
        '',
        'Java-8',
        'HashMap',
      ],
      '/NoSQL/': ['', 'Redis', 'MongoDB', 'Elasticsearch'],
      '/HTTP/': ['', 'security', 'caching', 'status-code', 'XDomain']    
    }
  }
};
