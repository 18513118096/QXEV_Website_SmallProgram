// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [//表格轮播图图片
      '../../image/tableSwiper1.jpg',
      '../../image/tableSwiper1.jpg',
      '../../image/tableSwiper1.jpg',
      '../../image/tableSwiper1.jpg'
    ],
    indicatorDots: false,//默认轮播图小圆点消失，自定义
    swiperCurrent:0,
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current //获取当前轮播图片的下标
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