<template>
  <div id="myname" @click="bus">{{aa}}子组件1{{msg}}
    <div id="aa">子组件2{{tot}}</div>
    <div></div>
  </div>
</template>

<script>
  import Bus from './bus.js';
  export default{
    props: ['msg','tot'],
    data(){
      return{
        aa:'222'
      }
    },
    methods: {
      bus () {
        Bus.$emit('dataMsg', '我要传给兄弟组件们，你收到没有');
      }
    }
  }
</script>
