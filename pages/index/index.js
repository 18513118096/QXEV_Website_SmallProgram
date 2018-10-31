//index.js
Page({
  data: {
    imgUrls: [//顶部轮播图图片
      // 'http://img.kutoo8.com/upload/image/90176856/20130509023742424_960x540.jpg',
      '../../image/swiperIndex1.jpg',
      '../../image/swiperIndex2.jpg',
      '../../image/swiperIndex3.jpg'
    ],
    handImgUrls: [//手动轮播图图片
      { image: '../../image/handSwiper1.jpg', words: "主副驾驶双气囊，儿童安全锁等诸多安全保障，安全不减配，驾乘更舒心"},
      { image: '../../image/handSwiper3.jpg', words: "家里充电，8小时充满，晚上充电白天开;在外快充，半小时可充至80%，尽享旅途美景"},
      { image: '../../image/handSwiper2.jpg', words: "一次续航最高可达380公里，引领电动汽车续航新高度"},  
      { image: '../../image/handSwiper5.jpg', words: "清行400采用独立悬挂，最小离地间隙达到150mm，驾乘更舒适"},  
      { image: '../../image/handSwiper6.jpg', words: "创新性车前标与K字型辅助进气口使整体彰显完美“容颜”，让人一见倾心"}, 
      { image: '../../image/handSwiper7.jpg', words: "宜家宜商，是清行400区分于普通电动汽车的最大优势"},  
      { image: '../../image/handSwiper8.jpg', words: "经济实用，百公里电费仅需8元"},
      { image: '../../image/handSwiper4.jpg', words: "高密度锂离子动力电池，通过 12 重极限安全检验" }, 
      { image: '../../image/handSwiper9.jpg', words: "10寸多媒体大屏、定速巡航等应有尽有"}, 
    ],
    indicatorDots: true,//是否显示轮播图指示点
    autoplay:true,//轮播图是否启动自动切换
    duration:1000,//滑动动画时长
    swiperIndex: 0, //这里不写第一次启动展示的时候会有问题
    interval: 2000,//网络状态  
    play: 'false',//自动播放  
    videoPoster: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540558258875&di=41a418b2b22d2c118b4de58f29e12534&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F10dfa9ec8a136327c5d58e089a8fa0ec08fac7d5.jpg",//poster图片
    plain: true,//按钮是否镂空，背景色透明
    swiperCurrent: 0,
  },
  //轮播图的切换事件
  swiperChange: function (e) {
    console.log(e.detail.current);
    this.setData({
      swiperCurrent: e.detail.current //获取当前轮播图片的下标
    })
  },
  //滑动图片切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  // 拨打客服电话
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
      success: function () {
        console.log("成功拨打电话")
      },
    })
  },
  onLoad: function () {
    // var  that  =  this;
    //     // 获取首页视频地址,我们的网络地址是动态从后台获取的  
    //     wx.request({
    //         method:  'POST',
    //         url:  'qqq',
    //         header: {
    //           'content-type': 'application/x-www-form-urlencoded' // 默认值
    //         },
    //       success: function (res) {
    //         that.setData({
    //           videoSrc: res.data.url,
    //           videoPoster: res.data.content
    //         });
    //       }
    // })
    this.setData({
              videoSrc: "http://www.w3school.com.cn//i/movie.mp4",    
       });
  },
  onReady: function (res) {
    var that = this;
    that.setData({
      play: 'false',
    })
  },
 

})
