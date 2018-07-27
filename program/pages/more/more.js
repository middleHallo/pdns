// pages/home/home.js
const config = require('../../utils/config.js')
const utils = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentPage:1,
    totalPage:1,
    datalist: []
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
    this.myGet(1)
  },

  /**
   * 处理数据请求
   */
  myGet:function(page){
    
    wx.showLoading({
      title: '加载中...',
    })

    let url = config.service.requesturl + "index/getPndsList?page=" + page
    let that = this
    let list = this.data.datalist

    utils.getData(url, function (res) {

      if (res.data.code == 200) {

        let newlist = list.concat(res.data.lists)
        that.setData({
          datalist: newlist,
          currentPage: res.data.currentPage,
          totalPage: res.data.totalPage
        })
        wx.hideLoading()
      }
    })
  },

  /**
   * 加载更多
   */

  addMore:function(){
    let currentPage = this.data.currentPage
    let totalPage = this.data.totalPage
    let page = currentPage + 1

    if (page > totalPage){
      wx.showModal({
        title: '加载完成!',
        content: '没有更多内容了',
        showCancel:false
      })
      return 0;
    }

    this.myGet(page)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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