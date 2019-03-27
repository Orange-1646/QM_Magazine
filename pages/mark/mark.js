// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList : [],
    authorized : false,
    userInfo : {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow(){
    this._renderList()
  },
  onLoad: function (options) {
    this._userAuthorization()
    this._renderList()
  },
  _userAuthorization(){
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              let userInfo = res.userInfo
              if (!userInfo) return
              this.setData({
                userInfo,
                authorized: true
              })
            }
          })
        }
      }
    })
  },
  _renderList() {
    let liked = wx.getStorageSync('liked')
    this.setData({
      articleList : liked
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
    this._renderList(this.data.articleList)
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
  // onPageScroll() {
  //   let that = this
  //   wx.showTabBar({
  //     animation: true
  //   })
  //   clearInterval(this.timer)
  //   this.timer = setTimeout(() => {
  //     that._hideTab()
  //   }, 1000)
  // },
  // _hideTab() {
  //   wx.hideTabBar({
  //     animation: true
  //   })
  // },
  onAuthorized(e){
    let userInfo = e.detail
    if(!userInfo) return
    this.setData({
      userInfo,
      authorized: true
    })
  }
})