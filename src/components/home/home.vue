<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="routerIndex" :unique-opened = "false" :router = "true">
          <!-- 第一个 -->
          <el-submenu index="1">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users">
              <svg-icon icon-class="home"></svg-icon>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 第二个 -->
          <el-submenu index="2">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <svg-icon icon-class="home"></svg-icon>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 第三个 -->
          <el-submenu index="3">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <svg-icon icon-class="home"></svg-icon>
              <span>分类参数</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <svg-icon icon-class="home"></svg-icon>
              <span>商品分类</span>
            </el-menu-item>
          </el-submenu>
          <!-- 第四个 -->
          <el-submenu index="4">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 第五个 -->
          <el-submenu index="5">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-button @click="logout">退出登录</el-button>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    routerIndex () {
      return this.$route.name
    }
  },
  methods: {
    logout () {
      this.$message({
        message: '退出登录成功',
        type: 'success'
      })
      sessionStorage.removeItem('token')
      this.$router.push({name: '/login'})
    }
  }
}
</script>

<style lang="less">
.home {
  height: 100%;
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  .el-header .el-menu {
    border-bottom: none;
  }
  .el-aside .el-menu {
    height: 100%;
    border-right: none;
  }
  .el-aside {
    background-color: #d3dce6;
    color: #333;
    line-height: 200px;
  }

  .el-main {
    padding: 0;
  }

  .el-container {
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
