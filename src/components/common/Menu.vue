<template>
  <div class="menu">
    <el-aside width=200px>
      <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="#1f7ad5" text-color="#fff"
        active-text-color="#ffd04b">
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="(child, index) in item.children" :key="index">
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>{{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
             <template slot="title">分组一</template> 
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>-->

        <!-- <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item> 
          </el-menu-item-group> -->
        <!-- <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->

        <!-- <el-menu-item index="2">
        
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>  -->
      </el-menu>

    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'MenuName',
  data() {
    return {
      menus: []
    }
  },
  created() {
    console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
  }
  // methods: {
  //   handleOpen(key, keyPath) {
  //     console.log(key, keyPath);
  //   },
  //   handleClose(key, keyPath) {
  //     console.log(key, keyPath);
  //   }
  // }
}
</script>

<style lang="less" scoped>
.menu {
  .el-aside {
    height: 100%;

    .el-menu {
      height: 100%;
// padding-left: 20px;
      .fa {
        margin-right: 20px;
        padding-left: 20px;
      }
    }

    .el-submenu .el-menu-item {
      min-width: 0;
    }
  }
}
</style>