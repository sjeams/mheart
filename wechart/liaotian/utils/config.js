/*
 * @Author: sjeam
 * @Date: 2023-10-16 13:38:07
 * @Description: 
 */
module.exports =  {
 
  // 请求域名 格式： https://您的域名
  HTTP_REQUEST_URL:'http://swoole.aheart.cn',
  // Socket链接 暂不做配置
  WSS_SERVER_URL:'ws://124.222.234.123:9501',
  //JWT token 名称
  TOKEN_NAME:'token',
  //用户注册id 名称
  USER_ID:'uid',
  //用户注册openid 名称
  OPEN_ID:'openid',
  // 以下配置非开发者，无需修改
  // 请求头
  HEADER:{
    'content-type': 'application/json'
  },

}