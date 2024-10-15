### wxml
  对于 <view></view> 你可以把它当成 div
      <block></block> 可以认为是 template
问题 ： 以首页做主页面，跳转登录页时，他可以返回主页面
解决 ：以登录做主页面，或者继续以首页作主页面，自己写tabbar

### components   组件
  组件之间的通信
  需要使用组件时，现在json中配置
    "usingComponents": {
      "my-component": "/components/component-tag-name" // 你其的组件名，及其路径
    }  
  使用：
    <my-component bindmyevent="myEventListener">
     <view>这里是插入到组件slot中的内容</view> 
    </my-component>
  对于该组件
    <view>这里是组件的内部节点</view>
    <slot></slot>
    <button bindtap="onTap">点击这个按钮将触发“myevent”事件</button> //bindtap点击事件
    //关于事件 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html

    其js部分
      onTap: function () {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption) //triggerEvent把他看成vue中的emit
    }
  
  