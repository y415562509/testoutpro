<template>
  <div class="login">
    <div class="login_main_div">
      <el-form label-position="top" label-width="80px" ref="form" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login.js'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            const {data, status} = await login(this.form)
            if (status === 200) {
              // 保存token值
              localStorage.setItem('token', data.token)
              this.$message({
                message: '登陆成功',
                type: 'success'
              })
              this.$router.push({name: 'home'})
            } else {
              this.$message.error(data.msg)
            }
          } catch (err) {
            console.log(err)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login_main_div {
    width: 500px;
    height: 350px;
    margin: 40px auto;
  }
</style>
