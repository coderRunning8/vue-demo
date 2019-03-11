<template>
  <div class="inputMobile">
    <remote-js src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></remote-js>
    <div class="inputValueBox">
      <h3>请输入手机号</h3>
      <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
      <!--<transition name="custom-classes-transition"-->
                  <!--enter-active-class="animated tada"-->
                  <!--leave-active-class="animated bounceOutRight">-->
        <!--<p class="errorMsg animated" v-show="errorMsg">请输入正确的手机号</p>-->
      <!--</transition>-->
      <!--<transition name="fade" :duration="{ enter: 500, leave: 500 }" -->
      <transition name="fade"
                  v-on:before-enter="beforeEnter"
                  v-on:enter="enter"
                  v-on:leave="leave"
                  v-bind:css="false">
        <p class="errorMsg animated" v-if="errorMsg">请输入正确的手机号</p>
      </transition>
      <p class="inputValue">
        <input type="tel" maxlength="11"
               v-model="mobile"  v-focus>
        <span @click="clearMobile" v-show="mobile.length>0"><img src="../assets/icons/btn_cancel@2x.png" alt=""></span>
      </p>
      <p class="next">
        <span @click="nextFn">下一步</span>
      </p>
    </div>
    <router-link :to="{ name:'helloWorld', params: {mobile: mobile }}" class="toWay">跳转</router-link>
    <child :level="level">hello world</child>
    <par :level="level">hello world</par>
  </div>
</template>
<script>
  var Child = '<div>\n' +
    '        <h1 v-if="level === 1">\n' +
    '            <slot></slot>\n' +
    '        </h1>\n' +
    '        <h2 v-if="level === 2">\n' +
    '            <slot></slot>\n' +
    '        </h2>\n' +
    '        <h3 v-if="level === 3">\n' +
    '            <slot></slot>\n' +
    '        </h3>\n' +
    '        <h4 v-if="level === 4">\n' +
    '            <slot></slot>\n' +
    '        </h4>\n' +
    '        <h5 v-if="level === 5">\n' +
    '            <slot></slot>\n' +
    '        </h5>\n' +
    '        <h6 v-if="level === 6">\n' +
    '            <slot></slot>\n' +
    '        </h6>\n' +
    '    </div>';
//全局组件
  import Vue from 'vue'
  Vue.component('child', {
    template:Child,
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  });
  //render用法
  Vue.component('par', {
    render:function (createElement) {
      //this.$slots返回了一个组件分发下来的元素和内容
      //this.$slots.default返回了具名的内容
      return createElement(
        'h'+this.level,
        //this.level是利用v-bind注入到组件中的level
        this.$slots.default
      )
    },
    //因为vue中组件父组件无法向子组件注入内容。所以我们需要通过
    //v-bind定义一个key，value向子组件注入内容。所要接收的值也需要在定义组件时的props属性中的定义一下
    props:{
      level:{

      }
    }
  });
  export default {
    name: 'inputMobile',
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    },
    components: {
      'remote-js': {
        render(createElement) {
          return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
        },
        props: {
          src: { type: String, required: true },
        },
      }
      // 'child':ReaderDome
    },
    data() {
      return {
        warnInfoshow:false,
        warnInfo:'',
        phoneRegular:/^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
        mobile:'',
        errorMsg:false, // 手机号输入对错状态
        level:1
      }
    },
    created() {
      if(this.$store.state.Mobile){
        this.mobile=this.$store.state.Mobile;
      }
    },
    computed: {
    },
    watch: {},
    methods: {
      clearMobile(){ // 清除输入的手机号
        this.mobile = '';
        this.errorMsg = false;
      },
      nextFn(){ // 点击下一步跳转到输入验证码
        let _this = this;
        if (_this.phoneRegular.test(_this.mobile)){
          this.$router.push({ name: 'helloWorld', params: { mobile: this.mobile }})
        }else {
          this.errorMsg = true;
        }
      },
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../assets/stylus/common.styl"
  @import "../assets/stylus/login.styl"
  /*@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"*/
  .inputMobile
    width 100%
  a
    color $color8
    $flex()
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: scale(0.5);
    opacity: 0;
  }
  .animated
    display inline-block

</style>
