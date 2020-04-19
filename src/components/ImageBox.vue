<template>
  <div class="image-box">
    <img v-show="showGif" class="img-style" src="@/assets/demo.gif" alt="" />
    <img v-show="!showGif" class="img-style" src="@/assets/demo1.png" alt="" />
    <div class="zan-box">
      <div class="zan" @click="clickZan">{{ showGif ? msg : "点赞" }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBox",
  data: () => {
    return {
      showGif: false,
      msg: ""
    };
  },
  methods: {
    clickZan: function() {
      this.showGif = true;
      this.$axios({
        method: "get",
        url: "http://www.yangxf.vip/index.php/weixin/wap/click/pbid/2"
      })
        .then(resp => {
          //这里使用了ES6的语法
          console.log(resp); //请求成功返回的数据
          if (resp.data.errmsg === "success") {
            this.msg = resp.data.data.messageInfo;
          }
        })
        .catch(error => {
          console.log(error); //请求失败返回的数据
        });
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
.zan-box {
  width: 100%;
  margin: 0.4rem 0 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zan {
  width: 3rem;
  height: 0.6rem;
  background-color: #ff756f;
  color: #ffff;
  font-size: 0.3rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
