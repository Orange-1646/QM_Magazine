// component/like/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    liked : Boolean
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
    toggleLike(){
      const liked = !this.data.liked
      this.setData({
        liked
      })
      this.triggerEvent('like', {
        liked
      })
    }
  }
})
