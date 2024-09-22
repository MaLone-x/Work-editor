<style lang="less" scoped>
.register-wrapper {
  width: 100%;
  height: 100%;
  background: rgb(198, 198, 236) url('./images/login-bc.png') no-repeat;
  background-size: 100% 100%;
  > div {
    position: relative;
    height: 100%;
    width: 100%;
  }
}
</style>
<template>
  <div class="register-wrapper clearfix">
    <div>
      <comRegister></comRegister>
    </div>
  </div>
</template>
<script setup>
import comRegister from './components/register.com.vue'
</script>
