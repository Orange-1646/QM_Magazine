// pages/index/index.js
import {IndexModel} from "../../models/index.js"
import {random} from "../../utils/randomStr.js"
const indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList : [],
    typeList : [],
    recommendInfo : {},
    getMore : '',
    magazineId : 0,
    loading: true,
    index : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    this.getData(0)
    // wx.showLoading({
    //   title: '',
    // })
    // setTimeout(function(){
    //   that._hideTab()
    // }, 1000)
  },
  jump(e){
    let index = e.detail.index
    if(index == this.data.index) return
    this.setData({
      index: index,
      articleList: [],
      typeList: [],
      recommendInfo: {}
    })
    this.getData(index)
  },
  onCatalog(){
    wx.switchTab({
      url: '/pages/catalog/catalog',
    })
  },
  // _hideTab(){
  //   wx.hideTabBar({
  //     animation: true
  //   })
  // },
  // onPageScroll(){
  //   let that = this
  //   wx.showTabBar({
  //     animation : true
  //   })
  //   clearInterval(this.timer)
  //   this.timer = setTimeout(()=>{
  //     that._hideTab()
  //   } ,1000)
  // },
  getData(magazineId=0){
    const articleList = indexModel.getArticleList(magazineId)
    const typeList = indexModel.getMarkTypeList(magazineId)
    const recommendInfo = indexModel.getRecommendInfo(magazineId)
    Promise.all([articleList, typeList, recommendInfo]).then(res => {
      console.log(res)
      this.setData({
        articleList : res[0],
        typeList : res[1],
        recommendInfo : res[2]
      })
      // wx.hideLoading()
      this.hideLoading()
    })
  },
  hideLoading(){
    wx.hideLoading()
    this.setData({
      loading : false
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
    this.setData({
      getMore : random(20)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})