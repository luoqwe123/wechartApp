const request = require("utils/request")

// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
     wx.login({
      success: async res => {
        
        // 发送 res.code 到后台换取 openId, sessionKey, unionId\
        // try{
        //   let result = await request.login('login',{
        //   name:'f',password:'admin888'
        //   },'POST')
        // }catch(err){
        //   wx.navigateTo({
        //     url: '../login/index',
        //     success(res){
        //       console.log(res)
        //     },
        //     fail(err){
        //       console.log(err)
        //     }
        //   })
        //   console.log(err)
        // }
        
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
