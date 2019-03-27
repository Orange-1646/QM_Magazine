// component/article/cmp.js
import {LikeModel} from '../../models/like.js'
const articleLike = new LikeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail : Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    liked : false
  },
  attached(){
    // console.log(this.data.articleDetail.artId)
    this.setData({
      liked: articleLike.getLikeStatus(this.data.articleDetail.artId)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onlike(e){
      let liked = e.detail.liked
      let articleIndex = this.data.articleDetail.artId
      if(liked){
        articleLike.addLikeList(this.data.articleDetail)
      }else{
        articleLike.removeLikeList(articleIndex)
      }
    }
  }
})
