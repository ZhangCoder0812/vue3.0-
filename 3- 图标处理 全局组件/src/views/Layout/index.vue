<template>
  <div class="layout">
      <LayoutHeader />
      <LayoutMain />
      <LayoutNav />
  </div>
</template>

<script>
  import LayoutHeader from './Components/Header.vue';
  import LayoutMain from './Components/Main.vue';
  import LayoutNav from './Components/Nav.vue';

  export default {
    name: "index",
    components:{LayoutHeader,LayoutMain,LayoutNav},


  };
</script>

<style scoped lang="scss">

</style>
