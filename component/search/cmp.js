// component/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    val: String
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
    onEnterSearch(e){
      this.setData({
        val : e.detail.value
      })
      this._search()
    },
    onButtonSearch(){
      this._search()
    },
    _search(){
      let input = this.data.val
      if (!input) return
      if (input !== '读书') {
        wx.showToast({
          title: '当前小程序为测试版本,暂不支持当前内容搜索',
          icon: 'none',
          duration: 2000,
          mask: true
        })
        return
      }
      wx.navigateTo({
        url: `/pages/search/search?val=${input}`,
      })
    },
    onBlur(e){
      this.setData({
        val : e.detail.value
      })
    }
  }
})
