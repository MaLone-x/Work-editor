<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background: rgb(198, 198, 236) url('./images/login-bc.png') no-repeat;
  background-size: 100% 100%;
}
</style>
<template>
  <div class="login-wrapper clearfix">
    <comLogin></comLogin>
  </div>
</template>
<script setup>
import comLogin from './components/login.com.vue'
</script>
