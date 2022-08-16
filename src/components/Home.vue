<template>
  <div class="home">
    <HeaderName></HeaderName>
    <el-container class="content">
      <MenuName></MenuName>
      <el-container>
        <el-main>
          <Bread></Bread>
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer>
          <FooterName></FooterName>
        </el-footer>
      </el-container>
    </el-container>

    <!-- <HeaderName></HeaderName>
<FooterName></FooterName>
<MenuName></MenuName> -->
  </div>
</template>

<script>
import HeaderName from './common/Header.vue';
import FooterName from './common/Footer.vue';
import MenuName from './common/Menu.vue'
import Bread from './common/Breadcrumb.vue'
export default {
  components: {
    HeaderName,
    FooterName,
    MenuName,
    Bread
  },
  name: 'HomeName'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;

  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;

    .cont {
      margin: 20px 0;
    }
  }
}
</style>
