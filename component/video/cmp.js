// component/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc: String,
    posterSrc : String,
    duration : String,
    title : String,
    videoId : String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster : true
  },
  lifetimes : {
    attached(){
      this.createVideo();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    createVideo : function(){
        this.video = wx.createVideoContext(this.properties.videoId, this);
    },
    togglePlay : function(){
      this.setData({
        showPoster: !this.data.showPoster
      });
      if (this.data.showPoster){
        this.video.pause();
      }else{
        this.video.play();
      }

    },
    onVideoEnd : function(){
      this.togglePlay();
    }
  }
})
