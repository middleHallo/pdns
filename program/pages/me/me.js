// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 关于我们
   */
  aboutUs:function(){
    wx.showModal({
      title: '关于我们',
      content: '陪你读书Lite是一款公益性的读书分享软件，这里每天十点会分享运营团队看到的值得分享的书籍，此小程序还有很多功能未完善，我们后期会继续完善，欢迎大家关注后续调整。如果您有什么好的推荐，麻烦给我们分享哦。QQ邮箱：1044154220@qq.com~',
      showCancel:false
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})