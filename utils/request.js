class Request {
  baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine'

  getData({ url, method = 'GET', data = {} }){
    let promise = new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl + url,
        success(res) {
          if (res.data.code == 0) {
            resolve(res.data.data)
          }
          else{
            this._requestErr()
          }
        },
        fail(err) {
          reject(err);
          this._requestErr();
        }
      })
    })
    return promise
  }
  _requestErr(){
    wx.showToast({
      title: '请求错误',
      icon: 'none'
    })
  }

}

export {Request}