// component/articleList/cmp.js
import { IndexModel } from "../../models/index.js"
import { SearchModel } from "../../models/search.js"
import { random } from "../../utils/randomStr.js"
const indexModel = new IndexModel()
const searchModel = new SearchModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList : {
      type : Array,
      value : []
    },
    getMore: {
      type: String,
      value: '',
      observer : 'loadMore'
    },
    searchText : String,
    magazineId : {
      type : Number,
      value : 0,
      observer : function(){
        this.setData({
          finished: false
        })
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoading : false,
    finished : false,
    fail : false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore(){
      this._resume()
      if (this._isLoading() || this._finished()) return
      this._setLoading()
      let magazineId = this.data.magazineId
      let searchText = this.data.searchText
      let count = this.data.articleList.length
      if(this.magazineId){
        indexModel.getArticleList(magazineId, count).then(res=>{
          if(res.length == 0){
            this._setToFinished()
          }
          this._addData(res)
          this._doneLoading()
        }, err=>{
          this._doneLoading()
          this._setFail()
        })
      }
      else{
        searchModel.getSearchArticleList(searchText, count).then(res => {
          if (res.length == 0) {
            this._setToFinished()
          }
          this._addData(res)
          this._doneLoading()
          console.log(this.data.articleList)
        }, err => {
          this._doneLoading()
          this._setFail()
        })
      }
    },
    _isLoading(){
      return this.data.isLoading
    },
    _setLoading(){
      this.setData({
        isLoading : true
      })
    },
    _doneLoading(){
      this.setData({
        isLoading : false
      })
    },
    _addData(list) {
      this.setData({
        articleList: this.data.articleList.concat(list)
      })
    },
    _finished(){
      return this.data.finished
    },
    _setToFinished(){
      this.setData({
        finished : true
      })
    },
    _setFail(){
      this.setData({
        fail : true
      })
    },
    _resume(){
      this.setData({
        fail : false
      })
    }
  }
})
