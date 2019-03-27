class SubscribeModel{
  setSubList(val){
    wx.setStorageSync('subbed', val)
  }
  getSubList(){
    return wx.getStorageSync('subbed') || []
  }
  addSubList(val){
    let subArr = this.getSubList()
    subArr.unshift(val)
    this.setSubList(subArr)
  }
  unSub(val){
    let subArr = this.getSubList()
    subArr = subArr.filter(item=>{
      return item.tagId != val.tagId
    })
    this.setSubList(subArr)
  }
  isSubbed(tagId){
    let subArr = this.getSubList()
    return subArr.some(item=>{
      return tagId === item.tagId
    })
  }
}

export {SubscribeModel}