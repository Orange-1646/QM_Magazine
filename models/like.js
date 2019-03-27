class LikeModel{
  setLikeList(list){
    wx.setStorageSync('liked', list)
  }
  getLikeList(){
    return wx.getStorageSync('liked')||[]
  }
  addLikeList(articleDetail){
    let likelist = this.getLikeList()
    likelist.unshift(articleDetail)
    this.setLikeList(likelist)
  }
  removeLikeList(artId){
    let likelist = this.getLikeList()
    let newlist = likelist.filter(item=>{
      return item.artId != artId
    })
    this.setLikeList(newlist)
  }
  getLikeStatus(artId){
    let likelist = this.getLikeList()
    return likelist.some(item=>{
      return item.artId == artId
    })
  }
}

export {LikeModel}