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

    <div id="clickheart" v-on:mousedown.left="createLoves($event)" v-on:mouseup="removeHeart">
      <clickheart ref="background"></clickheart>
    </div>

    <el-main class="content">
      <router-view></router-view>
    </el-main>
  </div>
</template>

   <script>
import clickheart from "./ClickHeart.vue";
export default {
  components: { clickheart },

  data() {
    return {};
  },
  mounted() {},
  methods: {
    createLoves() {
      this.$refs.background.createLoves(event);
    },
    removeHeart() {
      this.$refs.background.removeHeart();
    }
  }
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

#clickheart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>