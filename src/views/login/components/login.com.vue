<style lang="less" scoped>
.login-block {
  position: relative;
  float: right;
  height: 100%;
  width: 500px;
  background-color: pink;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    text-align: center;
    width: 200px;
    > header {
      font-size: 20px;
      letter-spacing: 4px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .subhead-block {
      letter-spacing: 2px;
      margin-bottom: 20px;
    }
    .login-btn {
      width: 100%;
      margin-top: 20px;
    }
    .other-login-block {
      width: 100%;
      text-align: center;
      > div {
        display: inline-block;
        cursor: pointer;
        &:first-child {
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="login-block">
    <div class="content">
      <header>欢迎登陆</header>
      <div class="subhead-block">作品WEB展示平台</div>
      <el-form :model="loginForm" label-width="auto" :rules="rules" ref="loginRule">
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input v-model="loginForm.passWord" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="handlerLogin">登录</el-button>
        </el-form-item>
        <el-form-item>
          <div class="other-login-block">
            <div @click="handlerSMS">短信登录</div>
            <div @click="handlerRegister">注册账号</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
let loginRule = ref('')
const router = useRouter()
const state = reactive({
  loginForm: {
    userName: '',
    passWord: ''
  }
})
const rules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const { loginForm } = toRefs(state)

const handlerLogin = () => {
  loginRule.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
const handlerRegister = () => {
  router.push({
    path: '/register'
  })
}
const handlerSMS = () => {
  router.push({
    path: '/SMSLogin'
  })
}
</script>
