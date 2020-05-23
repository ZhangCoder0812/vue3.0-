<template>
  <div :class="[menuStatus ? 'close' : 'open' ] ">
      <LayoutHeader />
      <LayoutMain />
      <LayoutNav />
  </div>
</template>

<script>
  import LayoutHeader from './Components/Header.vue';
  import LayoutMain from './Components/Main.vue';
  import LayoutNav from './Components/Nav.vue';
  import {computed} from '@vue/composition-api'
  export default {
    name: "index",
    components:{LayoutHeader,LayoutMain,LayoutNav},
    setup(props,{root}){
      const menuStatus = computed(()=>root.$store.state.app.isCollapse)
      return{
        menuStatus,
      }
    }

  };
</script>

<style scoped lang="scss">

</style>
