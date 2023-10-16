 
//login.js
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
   
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,调用微信的 wx.login 接口，从而获取code,再直接跳转到主页
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                }
              });
              wx.switchTab({
                url: '/pages/home/home',    //这里填入要跳转目的页面的url
                success: (result) => {
                  console.log("跳转到首页");
                },
                fail: () => {}
              });
            }
          });
        } else {
          // 用户没有授权，显示授权页面,这里不进行操作
          login()
        }
      }
    });
  },
  //微信登录方法 wx.login()
  
  //调用微信登录方法 wx.login() 获取临时登录凭证code ，并回传到开发者服务器。
  
  login() {
      wx.login({
          success: (ress) => {
              wx.request({
                  url: 'https://www.aheart.cn/app/wechat-api/wechat-code',
                  data: {
                      code: ress.code
                  },
                  success: (result) => {
                    console.log(result ); //获取到openid
                      console.log(result.data.data.openid); //获取到openid
                      // getuserinfo(result);
                
                  }
              })
          }, fail: (error) => {
              console.log('登录失败！' + error);
          }
      })
    },
    //获取用户信息
    getuserinfo(result){
        console.log(result.data.data.openid); //获取到openid
        wx.request({
            url: 'https://www.aheart.cn/app/wechat-api/wechat-info',
            data:{
                openId:result.data.data.openid,
            },
            success: (results) => {
                console.log(results.data.session_key);//拿到自己的系统账号
            },
            fail: (errors) => {
                console.log(errors);
            }
        })
    },
 
//获取微信用户手机号方法  
getPhoneNumber (e) {
  wx.login({
      success:res =>{
          wx.request({
              url:'https://www.aheart.cn/app/wechat-api/wechat-code',
              data:{
                 'encryptedData':e.detail.encryptedData,
                 'iv':e.detail.iv,
                 'code':res.code
              },
              method:'GET',
              header:{
                  'content-type':'application/json'
              },
              success:function(res){
                  wx.setStorageSync('PhoneNumber',res.data.data.phoneNumber);
                  wx.setStorageSync('openid',res.data.data.openid); 
                  wx.navigateTo({
                    url: '/pages/chat/chat'
                  })
              },
              fail:function(err){
                  console.log(err);
              }
          })
        }
  })
},
getUserInfo (e) {
  // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  wx.getUserProfile({
    desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      console.log(111)
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true
      })
    }
  })
},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow(options) {
      this.getUserInfo()
      var user = wx.getStorageSync('user'); //从本地缓存取用户信息
      if (user && user.nickName){  //如果用就显示本地缓存
          this.setData({
            isShowUserName : true,
            userInfo : user
          })
      }
    },
 
})
