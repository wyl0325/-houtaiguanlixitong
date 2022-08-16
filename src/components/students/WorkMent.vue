<template>
  <div class="workMent">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
    <PageName :total="total" :url="url"></PageName>
  </div>
</template>

<script>
import PageName from"../common/Pageing.vue"
export default {
  components: {
    PageName,
  },
  data() {
    return {
      tableData: [],
      total:0,
     
      loading: true,
    url:"/works"
  }
  }

}
</script>

<style lang="less" scoped>
.workMent {
  // .emo-form-inline .el-form-item{
  //   text-align:left;
  // }
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }

}
</style>