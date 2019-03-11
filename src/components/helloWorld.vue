<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">{{tot}}</a>
      </li>
    </ul>
    <router-link :to="{ path:'/login', query: {num: msg} }">Go to login</router-link>
    <router-link :to="{ name:'code', params: {num: msg} }">Go to code</router-link>
    <router-view>子路由</router-view>
    <msg1 :msg="msg" @childWay="change"></msg1>
    <msg2 :tot="tot" :msg="msg"></msg2>
    <div v-for="a in obj">{{a}}</div>
    <child :level="1">hello world</child>
  </div>
</template>

<script>
  import Child1 from './child1';
  import Child2 from './child2';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '111',
      tot:'888',
      obj:[]
    }
  },created(){
    this.msg = this.$route.params.mobile
  },
  components:{"msg1":Child1,"msg2":Child2},
  methods: {
    change(msg) {
      this.obj.push(msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
