// pages/user/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUseGetUserProfile:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     this.userinfo();
  },
  userinfo(){
    let _this = this;
    wx.request({
      url: 'https://www.aheart.cn/cn/sign/login-phone', //仅为示例，并非真实的接口地址
      method:'post',
      data: {
        phone: 18181941463,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        _this.setData({
        canIUseGetUserProfile: res.data.message
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }

})