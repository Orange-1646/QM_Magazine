// component/nineImage/cmp.js
import {myBehavior as mb} from '../behavior/my-behavior.js'
Component({
  behaviors : [mb],
  /**
   * 组件的属性列表
   */
  properties: {
    imageArr : Array,
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
    tapToPreview: function(e) {
      const index = e.currentTarget.dataset.index;
      const imageArr = this.properties.imageArr;
      wx.previewImage({
        urls: imageArr,
        current: imageArr[index]
      })
    },
  }
})
