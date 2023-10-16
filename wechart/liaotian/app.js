// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: {
      fid:123,//房间号
      tid:1,// 用户id,
      nickname:'大魔王是谁',
      // tid:2,// 用户id
      // nickname:'鬼怪',

    },
  }
})
