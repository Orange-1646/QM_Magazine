// component/subscribe/cmp.js
import {SubscribeModel} from '../../models/subscribe.js'
const sub = new SubscribeModel()
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
    subscribed : false
  },
  attached(){
    if(sub.isSubbed(this.data.tagId)){
      this.setData({
        subscribed : true
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      let tagInfo = {
        tag : this.data.tag,
        tagId : this.data.tagId
      }
      if(!this.data.subscribed){
        sub.addSubList(tagInfo)
        // cache
      }else{
        //decache
        sub.unSub(tagInfo)
      }
      this._toggleSub()
      this.triggerEvent('subchange')
    },
    _toggleSub(){
      this.setData({
        subscribed: !this.data.subscribed
      })
    }

  }
})
