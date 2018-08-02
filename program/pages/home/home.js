// pages/home/home.js
const config = require('../../utils/config.js')
const utils = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    bottom:30,
    right:20
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
    this.refresh()
  },

  /**
   * 刷新数据
   */
  refresh:function(){
    wx.showLoading({
      title: '加载中...',
    })
    let url = config.service.requesturl + "index/getPndsTj"
    let that = this

    utils.getData(url, function (res) {

      if (res.data.code == 200) {
        that.setData({
          datalist: res.data.lists
        })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 如果之前没加载成功，则再加载一次
    let dataList = this.data.datalist
    if(dataList.length == 0){
      this.refresh()
    }
  },

  /**
   * 预览图片
   */
  clickImg:function(e){
    let idx = e.currentTarget.dataset.idx
    let data = this.data.datalist[idx]
    let urls = [data['imgurl']]

    wx.previewImage({
      urls: urls,
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