<template>
  <div id="app" class="container">
    <el-menu mode="horizontal" class="el-menu-demo">
      <el-menu-item>
        <router-link to="/home">GuestBook</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to="/sign">Sign the GuestBook</router-link>
      </el-menu-item>
    </el-menu>

    <el-main class="content">
      <router-view></router-view>
    </el-main>
  </div>
</template>

   <script>
// import BookVideo from "@/public/assets/video/book.mp4";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style>
.content {
  margin-top: 50px;
}
.video {
  position: fixed;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -99;
}
</style>