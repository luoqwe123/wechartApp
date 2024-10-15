// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const request = require("../../utils/request")

function debounce(fn,delay){
  let timer;
  return function (...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}
Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      username: '',
      password:''
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  bindViewTap() {
    wx.switchTab({
      url: '../index/index',
      fail(err){
        console.log(err)
      }
    })
  },
  async login(){
      let go = this.bindViewTap
      go()
      // try{
      //   let data = {
      //     name:this.data.userInfo.username,
      //     password:this.data.userInfo.password
      //   }
      //   let res = await request.request("login",data,"POST")
      //   go()
      // }catch(err){
      //   console.log(err)
      // }
      
   
   
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange: debounce(function (e) {
    
    const {  value } = e.detail
    const { id } = e.target;
    const { avatarUrl } = this.data.userInfo;
    this.setData({
      [`userInfo.${id}`]: value,
      //hasUserInfo:  value && avatarUrl && avatarUrl !== 'defaultAvatarUrl',
    });
    
  }, 300),
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})


