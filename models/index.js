import {Request} from "../utils/request.js"
class IndexModel extends Request{
  getArticleList (magazineId = 0, count = 0){
    return this.getData({
      url: `/getIndexArticleList/${magazineId}/${count}`
    })
  }
  getRecommendInfo(magazineId = 0){
    return this.getData({
      url: `/getRecommendInfo/${magazineId}`
    })
  }
  getMarkTypeList(magazineId = 0){
    return this.getData({
      url: `/getMarkTypeList/${magazineId}`
    })
  }
}

export {IndexModel}