<template>
  <div class="image-box">
    <img v-show="showGif" class="img-style" src="@/assets/demo.gif" alt="" />
    <img
      v-show="!showGif"
      class="img-style"
      src="@/assets/demo1.png"
      alt=""
      @click="clickImage"
    />
  </div>
</template>

<script>
export default {
  name: "ImageBox",
  data: () => {
    return {
      showGif: false
    };
  },
  methods: {
    clickImage: function() {
      console.log(this.showGif);
      this.showGif = true;
    }
  }
};
</script>

<style scoped>
.image-box {
  margin: 0.2rem;
}
.img-style {
  width: 7.1rem;
  height: 3.35rem;
}
</style>
