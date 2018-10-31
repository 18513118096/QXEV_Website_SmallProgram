// pages/index/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     currentTab:0,
     newsTitle:["新闻动态","媒体测评","活动咨询","清行视频"],//公司新闻标题
     NewsList:[
       {
         imageUrl: "../../image/aaa.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "2098", url:"https://mp.weixin.qq.com/s/HNBllc_3oFHg7Eq6_wWN4Q"},
       {
         imageUrl: "../../image/aaa.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "209", url:"https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
       },
       {
         imageUrl: "../../image/aaa.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "2", url:"https://mp.weixin.qq.com/s/Kjg5L7WL2Lqq4mgX74qOpw"
       },
       {
         imageUrl: "../../image/aaa.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "10000", url:"https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
       },
       ],//公司新闻动态列表
    MediaList: [
      {
        imageUrl: "http://img.kutoo8.com/upload/image/90176856/20130509023742424_960x540.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "2098", url: "https://mp.weixin.qq.com/s/HNBllc_3oFHg7Eq6_wWN4Q"
      },
      {
        imageUrl: "http://img.kutoo8.com/upload/image/90176856/20130509023742424_960x540.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "209", url: "https://mp.weixin.qq.com/s/HNBllc_3oFHg7Eq6_wWN4Q"
      },
      {
        imageUrl: "http://img.kutoo8.com/upload/image/90176856/20130509023742424_960x540.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "2", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
      {
        imageUrl: "../../image/swiperIndex3.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "10000", url: "https://mp.weixin.qq.com/s/HNBllc_3oFHg7Eq6_wWN4Q"
      },
    ],//媒体测评列表
    ActivityList: [
      {
        imageUrl: "../../image/swiperIndex3.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "2098", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
      {
        imageUrl: "../../image/swiperIndex3.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "209", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
      {
        imageUrl: "../../image/swiperIndex3.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "2", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
      {
        imageUrl: "../../image/swiperIndex3.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "10000", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
    ],//活动咨询列表
    VedioList: [
      {
        imageUrl: "../../image/aaa.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "2098", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
      {
        imageUrl: "../../image/aaa.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "209", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
      {
        imageUrl: "../../image/aaa.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "2", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
      {
        imageUrl: "../../image/aaa.jpg", newTitle: "定位6座小型SUV 北京清行400首次亮相", upLoadTime: "2018-09-26  14:23:36", watchedNum: "10000", url: "https://mp.weixin.qq.com/s/oZy-_GjWzGUeDv9trJXCEA"
      },
    ],//清行视频列表
  },
  clickTab:function(e){
    this.setData({
      currentTab: e.target.dataset.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})