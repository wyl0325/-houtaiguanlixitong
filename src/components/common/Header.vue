<template>
  <div class="header">
    <el-header>
      <div class="title">通用管理系统</div>
      <div>{{ nam }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from '@/utils/setToken.js'

export default {
  name: 'HeaderName',
  data() {
    return {
      nam: ''
    }
      
},
  created() {
    this.nam = getToken('username')
  }
}
</script>

<style lang="less" scoped>
.header{
    

  .el-header{
    background: #1f7ad5;
    color:#fff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    height: 52px !important;
    .title{
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>