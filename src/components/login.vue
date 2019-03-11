<template>
  <div class="login">
    111111111
    {{this.$route.query.num}}
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {},
    data() {
      return {
        str:'000'
      }
    },
    created() {
      // this.str = this.$route.params.mobile;
    },
    computed: {},
    watch: {},
    methods: {
    }
  }
</script>

<!--<style lang="stylus" rel="stylesheet/stylus" scoped>-->
<!--</style>-->
