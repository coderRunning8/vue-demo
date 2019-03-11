<template>
  <div id="myname">{{aa}}子组件{{msg}}
  <input   v-on:input="up($event.target.value)"/>
    <input ref="inp">
  </div>
</template>

<script>
  import Bus from './bus.js';
  export default{
    props: ['msg'],
    data(){
      return{
        aa:'13708222582',
        foo:true
      }
    },
    methods: {
      up(str) {
        let u =  str.trim().slice(0, str.indexOf('.') === -1 ? str.length : str.indexOf('.') + 3);
        if (u !== str) {
          this.$refs.inp.value = u;
        }
        this.$emit('childWay',u); //向父组件传递的数据
      }
    },
    mounted() {
      Bus.$on('dataMsg', (e) => {
        console.log("aaaa"+e);
      })
    },
  }
</script>
