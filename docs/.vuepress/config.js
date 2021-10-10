module.exports = {
  extraWatchFiles: [
    '**/*.md', '**/*/*.md'
  ],
  themeConfig: {
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false,
    search: false,
    logo: '/assets/img/logo.png',
    sidebar: 'auto',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: 'JAVA',
        link: '/java/'
      },
      {
        text: '工具',
        link: '/tool/'
      },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [{
        title: "sce",
        path: "/java/",
        collapsable: false,
        sidebarDepth: 1,
        //children: ['', 'one']
      },
      {
        title: '各种官网',
        path: '/tool/addr'
      }
    ]
  }
}