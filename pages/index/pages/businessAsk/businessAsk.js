// pages/index/pages/businessAsk/businessAsk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordsNum:0,//文本域输入的字数
  },
  // 单选框
  radioCheckedChange: function (e) {
    this.setData({
      radioCheckVal: e.detail.value
    })
  },
  // 业务咨询信息提交
  formSubmit: function (e) {
    console.log(e.detail.value)
  },
  //  文本域输入时字数计数
  bindText:function(e){
    this.setData({
      wordsNum:e.detail.cursor
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