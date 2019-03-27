// component/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag : String,
    tagId : Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tagTap(){
      this._showErr()
      // wx.navigateTo({
      //   url : `/pages/type/type?tag=${this.properties.tagId}`
      // })
    },
    _showErr(){
      wx.showToast({
        title: '当前小程序为测试版本，暂不支持该功能',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
  }
})
