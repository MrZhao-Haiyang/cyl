<template>
  <div id="app">
    <ImageBox :info="info" :updateInfo="updateInfo" />
    <Content />
    <Message v-for="(item, index) in msg" :key="index" :msg="item" />
    <InputBox :submit="submit" />
  </div>
</template>

<script>
import ImageBox from "./components/ImageBox.vue";
import Content from "./components/Content.vue";
import Message from "./components/Message.vue";
import InputBox from "./components/InputBox.vue";

export default {
  name: "App",
  components: {
    ImageBox,
    Content,
    Message,
    InputBox
  },
  created() {
    this.$axios({
      method: "get",
      url: "http://www.yangxf.vip/index.php/weixin/wap/main/pbid/2"
    })
      .then(resp => {
        //这里使用了ES6的语法
        console.log(resp); //请求成功返回的数据
        if (resp.data.errmsg === "success") {
          this.msg = resp.data.data.messages;
          this.info = resp.data.data.clicks.countInfo;
        }
      })
      .catch(error => {
        console.log(error); //请求失败返回的数据
      });
  },
  data: () => {
    return {
      msg: [],
      info: ""
    };
  },
  methods: {
    submit: function(msg) {
      this.$axios({
        method: "get",
        url: `http://www.yangxf.vip/index.php/weixin/wap/submit?pbid=2&message=${msg}`
      })
        .then(resp => {
          //这里使用了ES6的语法
          console.log(resp); //请求成功返回的数据
          if (resp.data.errmsg === "success") {
            this.msg = [resp.data.data, ...this.msg];
          }
        })
        .catch(error => {
          console.log(error); //请求失败返回的数据
        });
    },
    updateInfo: function(info) {
      this.info = info;
    }
  }
};
</script>

<style>
#app {
  padding-bottom: 2rem;
}
</style>
