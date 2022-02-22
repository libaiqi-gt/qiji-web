module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('http://img.pconline.com.cn/images/bbs4/20092/18/1234918236972.gif')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'bgColor': '#87D3E5'
      })
    },
  },
  plugins: [],
}
