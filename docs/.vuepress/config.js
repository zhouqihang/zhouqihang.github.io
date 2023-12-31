module.exports = {
  title: '启航',
  description: '启航的学习笔记',
  locals: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/zhouqihang' }
    ],
    sidebar: [
      {
        title: '前端相关',
        path: '/front-end/',
        children: [
          {
            title: 'Vue.js原理',
            path: '/front-end/vue',
            children: [
              {
                title: '响应式实现原理',
                path: '/front-end/vue/responsive-principle'
              }
            ]
          },
          {
            title: 'Next.js学习笔记',
            path: '/front-end/next/',
            children: [
              {
                title: '路由系统',
                path: '/front-end/next/route'
              }
            ]
          }
        ]
      }
    ]
  }
}