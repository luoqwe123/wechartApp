// pages/article/article.js
const request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    try{
      let res = await request.request('article',{page:1,row:4},'GET')
      console.log(res)
      this.setData({
        articleList:res.data
      })
      console.log(this.data.articleList[0])
    }catch(err){
      console.log(err)
    }
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})