// component/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title :['青芒','兴趣','物质','世界','新事','灵魂'],
    focus : 0,
    activeId : 'magazine0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select(e){
      let target = e.currentTarget.dataset.index
      this._selectFocus(target)
      this.triggerEvent('jump', {
        index : target
      })
    },
    _selectFocus(index){
      this.setData({
        focus : index,
        activeId : `magazine${index === 0 ? 0 : index - 1}`
      })
    }
  }
})
