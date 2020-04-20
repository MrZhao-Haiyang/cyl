<template>
  <div class="image-box">
    <img class="top-style" src="@/assets/top.jpg" alt="" />
    <img v-show="showGif" class="img-style" src="@/assets/flag1.jpg" alt="" />
    <img v-show="!showGif" class="img-style" src="@/assets/flag.jpg" alt="" />
    <div class="zan-box">
      <div class="zan" @click="clickZan">
        {{ showGif ? msg : "以青春之名点亮团旗" }}
      </div>
      <div class="zan1">———纪念五四运动101周年</div>
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
.top-style {
  width: 7.1rem;
  height: 3.57rem;
  margin: 0.2rem 0;
}
.img-style {
  width: 7.1rem;
  height: 5.32rem;
}
.zan-box {
  width: 100%;
  margin: 0.4rem 0 0.2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.zan {
  width: 5rem;
  height: 0.6rem;
  background-color: #ff756f;
  color: #ffff;
  font-size: 0.3rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zan1 {
  width: 5rem;
  height: 1rem;
  color: #000000;
  font-size: 0.3rem;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
