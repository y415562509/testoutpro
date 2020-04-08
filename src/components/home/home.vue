<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu :unique-opened = "false" :router = "true">
          <!-- 第一个 -->
          <el-submenu index="1">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 第二个 -->
          <el-submenu index="1">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="1-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 第三个 -->
          <el-submenu index="1">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="1-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>分类参数</span>
            </el-menu-item>
            <el-menu-item index="1-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>商品分类</span>
            </el-menu-item>
          </el-submenu>
          <!-- 第四个 -->
          <el-submenu index="1">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 第五个 -->
          <el-submenu index="1">
            <template slot="title">
              <svg-icon icon-class="管理系统"></svg-icon>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-1">
              <svg-icon icon-class="home"></svg-icon>
              <span>数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-button>退出登录</el-button>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
