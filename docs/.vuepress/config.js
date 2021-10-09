// .vuepress/config.js
module.exports = {
	base:'/',
	dest:'docs/.vuepress/dist',
	title: 'jcblog',
	description: 'JC personal blog',
    themeConfig: {
	    nav: [
	      { text: 'Home', link: '/' },
	      { text: 'Guide', link: '/guide/' },
	      { text: 'External', link: 'https://google.com' },
	    ]
  }
}