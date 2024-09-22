<style lang="less" scoped>
.register {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .register-block {
    position: relative;
    padding: 20px 10px;
    width: 600px;
    height: 400px;
    text-align: center;
    border-radius: 25px;
    background-color: pink;
    > header {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 4px;
    }
    .inline-block {
      display: flex;
      justify-content: center;
    }
    .content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
    }
    .register-btn {
      display: inline-block;
      width: 100%;
    }
    .other-login {
      width: 100%;
      justify-content: center;
      > div {
        cursor: pointer;
      }
      > div:first-child {
        margin-right: 50px;
      }
    }
  }
}
</style>
<template>
  <div class="register">
    <div class="register-block">
      <header>欢迎注册</header>
      <div class="content">
        <el-form :model="registerForm" label-width="auto" :rules="registerRules" ref="registerRule">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item prop="userName">
                <div>用户名</div>
                <el-input v-model="registerForm.userName" placeholder="请输入用户名" />
              </el-form-item>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item prop="phone">
                <div>手机号</div>
                <el-input v-model="registerForm.phone" placeholder="请输入绑定的手机号" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="authCode">
                <div>验证码</div>
                <el-input v-model="registerForm.authCode" placeholder="点击输入" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item>
                <div style="visibility: hidden">发送验证码</div>
                <el-button type="primary" class="login-btn" @click="getVerification"
                  >发送验证码</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item prop="passWord">
                <div>输入密码</div>
                <el-input v-model="registerForm.passWord" placeholder="请输入密码" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="confirmPassword">
                <div>确认密码</div>
                <el-input v-model="registerForm.confirmPassword" placeholder="确认密码" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item style="padding: 0 60px">
            <el-button type="primary" class="register-btn" @click="handlerRegister">注册</el-button>
          </el-form-item>
          <el-form-item>
            <div class="inline-block other-login">
              <div @click="toLogin">账号登录</div>
              <div @click="toSMSLogin">短信登录</div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, toRefs } from 'vue'
const registerRule = ref('')
import { useRouter } from 'vue-router'
const router = useRouter()

const state = reactive({
  registerForm: {
    userName: '',
    phone: '',
    authCode: '',
    passWord: '',
    confirmPassword: ''
  }
})
const { registerForm } = toRefs(state)
const registerRules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  authCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
  confirmPassword: [{ required: true, message: '请确认密码', trigger: 'blur' }]
})
const getVerification = () => {}
const handlerRegister = () => {
  registerRule.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
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
