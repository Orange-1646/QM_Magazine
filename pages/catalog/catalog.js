// pages/catalog/catalog.js
import {tagInfoList} from '../../utils/taglist.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList : tagInfoList,
    subArr : [],
    val : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setSubArr()
  },
  setSubArr(){
    this.setData({
      subArr : wx.getStorageSync('subbed')
    })
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
    this.setData({
      val: ''
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

  },
  onSubChange(){
    this.setSubArr()
  }
})