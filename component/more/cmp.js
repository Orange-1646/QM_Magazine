// component/more/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag : String
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
    moreOptions(){
      wx.showActionSheet({
        itemList: [`内容过期了`, `内容和${this.properties.tag}不符`, `不再显示来自${this.properties.tag}的内容`],
        success(res){
          if(res.tapIndex == 2) return
          wx.showToast({
            title: '已提交',
            mask: true,
            duration: 1000
          })
        }
      })
    }
  }
})
