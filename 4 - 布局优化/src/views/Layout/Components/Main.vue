<template>
    <div class="main-wrap">
        <router-view />
    </div>
</template>

<script>
  export default {
    name: "Main"
  };
</script>

<style scoped lang="scss">
    .main-wrap{
        position: fixed;
        top:75px;
        right: 0;
        left:250px;
        bottom: 0;
        border: 30px solid #f7f7f7;
        border-bottom: none;
        box-sizing: border-box;
    }
</style>
