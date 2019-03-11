<template>
  <div class="bubblesBox">
    <ul class="bg-bubbles">
      <li v-for="i in 10" :key="i"></li>
    </ul>
    <div class="login">
      <h2>{{title}}</h2>
      <p><input type="text" placeholder="请输入账号" v-model="admin"></p>
      <p><input type="password" placeholder="请输入密码" v-model="password"></p>
      <p><input type="button" value="登录" @click="buttonClick"></p>
      <ul :data-id="type.count">
        <li v-for="i in arr">{{i}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bubble",
        data(){
          return{
            // title:'欢迎您，请登录',
            admin:'123456',
            password:'123456',
            arr:["a","b","c"],
            type:{

            }
          }
        },
        beforeCreate(){
          this.title="欢迎您，请登录";
        },
        methods:{
          buttonClick(){
            this.$set(this.type,'count','11');
            this.$set(this.arr,1,'d');
            this.title = '请登录';
            this.$store.getters.mobileNum;
            this.$store.commit('Mobile', '13708222582');
            this.$store.commit('firstData');
            this.$store.dispatch("thirdData");
            this.$router.push({ name: 'vueMobile', params: { mobile: this.$store.state.Mobile }})
            this.$http.get('/api/v1/consumer/check/mobile/isBind', {
              params: {
                mobile:'13550015592'
              }
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  *{
    margin: 0;padding: 0;
    font-family: "Adobe 黑体 Std R";
  }
  .bubblesBox
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, #50A3A2, #53E3A6);
    /*使气泡背景充满整个屏幕,如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为*/
    .bg-bubbles
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      li
        position: absolute;
        bottom: -160px;/*bottom 的设置是为了营造出气泡从页面底部冒出的效果；*/
        width: 40px;/*默认的气泡大小；*/
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        list-style: none;
        animation: square 15s infinite;/*使用自定义动画使气泡渐现、上升和翻滚；*/
        transition-timing-function: linear;
      /*分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；*/
      li:nth-child(1)
        left: 10%;

      li:nth-child(2)
        left: 20%;
        width: 90px;
        height: 90px;
        animation-delay: 2s;
        animation-duration: 7s;

      li:nth-child(3)
        left: 25%;
        animation-delay: 4s;

      li:nth-child(4)
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 8s;
        background-color: rgba(255, 255, 255, 0.3);

      li:nth-child(5)
        left: 70%;

      li:nth-child(6)
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);

      li:nth-child(7)
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;

      li:nth-child(8)
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 15s;

      li:nth-child(9)
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 12s;
        background-color: rgba(255, 255, 255, 0.3);

      li:nth-child(10)
        left: 85%;
        width: 160px;
        height: 160px;
        animation-delay: 5s;
    .login
      width: 250px;
      height: 200px;
      position: absolute;
      top: 0;bottom: 0;left: 0;right: 0;
      margin: auto;
      text-align: center;
      h2
        color: white;
        margin-bottom: 20px;
      p
        margin: 10px auto;
      input
        width: 250px;
        height: 40px;
        line-height: 40px;
        background-color: rgba(255,255,255,.3);
        text-align: center;
        outline: none;
        border: 1px solid rgba(255,255,255,.5);
        color: #fff;
        border-radius: 5px;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-size: 14px;
      input[type=button]
        background-color: white;
        color: #6FE4A8;
        font-size: 16px;
        font-weight: bolder;

  input::-webkit-input-placeholder
    color:#fff;
  input::-moz-placeholder   /* Mozilla Firefox 19+ */
    color:#fff;
  input:-moz-placeholder   /* Mozilla Firefox 4 to 18 */
    color:#fff;
  input:-ms-input-placeholder /* Internet Explorer 10-11 */
    color:#fff;


  /*自定义 square 动画；*/
  @keyframes square {
    0% {
      opacity: 0.5;
      transform: translateY(0px) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(90deg)
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(135deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-1000px) rotate(180deg);
    }
  }

</style>
