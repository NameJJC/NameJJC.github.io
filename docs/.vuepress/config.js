// .vuepress/config.js
module.exports = {
	  title: 'Hello VuePress',
	  description: 'Just playing around',
  themeConfig: {
	  theme: 'vuepress-theme-xx',
    ///logo: '/assets/img/logo.png',
	    nav: [
	      { text: 'Home', link: '/' },
	      { text: 'Guide', link: '/guide/' },
	      { text: 'External', link: 'https://google.com' },
	    ]
  }
}