const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  devServer: {
    port: 8080, // 端口号
    host: "0.0.0.0",
    disableHostCheck: true,
    // https: false, // https:{type:Boolean}
    // open: true, //配置自动启动浏览器
  },
  productionSourceMap: false,
}