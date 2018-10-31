// pages/index/pages/map/map.js
//获取应用实例
const app = getApp()
var QQMapWX = require('./mapPlugins/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 一键导航
  mapShow: function (e) {
    console.log(e.target.dataset)
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'CRNBZ-HRL32-3LEUI-CWHRX-YFBLE-73BGG'
    });
    qqmapsdk.geocoder({
      address: e.target.dataset.address,
      success: function (res) {
        var latitude = res.result.location.lat
        var longitude = res.result.location.lng
        wx.openLocation({
          latitude,
          longitude,
          name: e.target.dataset.addressname,
          address: e.target.dataset.address,
          scale: 16
        })
      },
      fail: function (res) {
        console.log(res, "错误地图");
      }
    });
  
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