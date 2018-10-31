const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/* 公共request 方法 */
const request = ({
  url,
  data,
  method = 'POST'
}) => {
  // 方法使用
  showLoading({
    title: '加载中',
  })
  return new Promise(function (resolve, reject) {
    wx.request({
      url,
      data,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': 'JSESSIONID=3A49B189C9FC262E9B3B24BF95B1B7AA; fp_ver=3.3.3; BSFIT_EXPIRATION=1540945460444; BSFIT_TRACEID=; BSFIT_DEVICEID=dhZLp2LG1ZWSVQs2SXyDUPMiaVn6t74yJVMP22gSgVPwfdG9LJDx2Ikp0c_BggStVtu6ie8Iem5iVuN7QTwWfWbk9wQQu3TNkojMmGu9XitSVO_UC-iBBh77yHstgAU3-hZYd8DZ9ukRXOoUv655xjRrswQ8-sbw; BSFIT_OkLJUJ=8G1P49UYYKFM5LLS; session_key=04BC3400378E4F32965CF05BD2E8D788_session_565667222'
      },
      method,
      success(res) {
        hideLoading();
        if (res.data.result === 'error') {
          showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000,
            mask: true
          })
        }
        resolve(res.data)
      },
      fail(res) {
        hideLoading();
        showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000,
          mask: true
        })
        reject(res.data)
      },
      complete(res) { }
    })
  }).catch((res) => { })
}
/* 公共request 方法 */

/* 公共showTotast  loading 方法 */
const showToast = (obj) => {
  const objDefault = {
    title: '提示',
    icon: 'success',
    image: '',
    duration: 1500,
    mask: false,
    success() { },
    fail() { },
    complete() { }
  }
  for (let i in objDefault) {
    objDefault[i] = obj[i] || objDefault[i]
  }
  wx.showToast(objDefault)
}
const hideToast = (obj = {}) => {
  const objDefault = {
    success() { },
    fail() { },
    complete() { }
  }
  for (let i in objDefault) {
    objDefault[i] = obj[i] || objDefault[i]
  }
  wx.hideToast(objDefault)
}
const showLoading = (obj) => {
  const objDefault = {
    title: '提示',
    mask: false,
    success() { },
    fail() { },
    complete() { }
  }
  for (let i in objDefault) {
    objDefault[i] = obj[i] || objDefault[i]
  }
  wx.showLoading(objDefault)
}
const hideLoading = (obj = {}) => {
  const objDefault = {
    success() { },
    fail() { },
    complete() { }
  }
  for (let i in objDefault) {
    objDefault[i] = obj[i] || objDefault[i]
  }
  wx.hideLoading(objDefault)
}
/* 公共showTotast  loading 方法 */
module.exports = {
  formatTime: formatTime,
  request,
  showToast,
  hideToast,
  showLoading,
  hideLoading
}