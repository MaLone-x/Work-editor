<style lang="less" scoped>
.SMS-login-wrapper {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  .SMS-login-block {
    position: relative;
    width: 400px;
    height: 400px;
    background-color: pink;
    border-radius: 25px;
    padding: 50px 0;
    > header {
      margin-bottom: 50px;
      width: 100%;
      text-align: center;
      div {
        display: inline-block;
        cursor: pointer;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
    .content {
      width: 320px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .login-btn {
        margin-top: 50px;
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <div class="SMS-login-wrapper">
    <div class="SMS-login-block">
      <header>
        <div @click="toLogin">账号登陆</div>
        <div @click="toSMSLogin">短信登陆</div>
      </header>
      <div class="content">
        <el-form :model="SMSForm" label-width="auto" :rules="registerRules" ref="registerRule">
          <el-form-item prop="userName">
            <el-input
              v-model="SMSForm.phone"
              placeholder="请输入手机号码"
              class="input-with-select"
            >
              <template #prepend>
                <el-select v-model="select" placeholder="Select" style="width: 115px">
                  <el-option label="Restaurant" value="1" />
                  <el-option label="Order No." value="2" />
                  <el-option label="Tel" value="3" />
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item prop="authCode">
                <el-input
                  v-model="SMSForm.authCode"
                  placeholder="点击输入"
                  class="input-with-select"
                >
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="authCode">
                <el-button type="primary" @click="getAuthCode">发送验证码</el-button>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="authCode">
            <el-button type="primary" class="login-btn" @click="handlerLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
  SMSForm: {
    phone: ''
  }
})
const { SMSForm } = toRefs(state)

const getAuthCode = () => {}
const handlerLogin = () => {}
const toLogin = () => {
  router.push({
    path: '/login'
  })
}

const toSMSLogin = () => {
  router.push({
    path: '/SMSLogin'
  })
}
</script>
