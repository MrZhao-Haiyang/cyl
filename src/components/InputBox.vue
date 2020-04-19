<template>
  <div class="input-box">
    <div v-show="!showInput" class="btn-box" @click="showInput = true">
      点击添加评论
    </div>
    <div v-show="showInput" class="text-box">
      <div class="title-box">
        <div class="title-text">评论</div>
        <div class="title-close" @click="showInput = false">关闭</div>
      </div>
      <div class="content-box">
        <textarea
          v-model="msg"
          class="textarea-style"
          name="留言"
          id="message"
          cols="20"
          rows="5"
        ></textarea>
      </div>
      <div class="bottom-box">
        <div class="submit-box" @click="submitMsg">发表</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  data: () => {
    return {
      showInput: false,
      msg: ""
    };
  },
  props: ["submit"],
  methods: {
    submitMsg: function() {
      this.submit(this.msg);
      this.showInput = false;
    }
  }
};
</script>

<style scoped>
.input-box {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
.btn-box {
  width: 100%;
  height: 0.8rem;
  background-color: #ff0a1c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 0.3rem;
}
.text-box {
  width: 100%;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}
.title-box {
  height: 0.5rem;
  padding: 0.1rem 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  font-size: 0.2rem;
}
.content-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.textarea-style {
  width: 6.9rem;
  margin: 0.3rem 0;
  border: 1px solid #eaeaea;
}
.bottom-box {
  height: 0.5rem;
  padding: 0 0.2rem;
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.submit-box {
  width: 1rem;
  height: 0.5rem;
  background-color: #ff0200;
  font-size: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 2px;
}
</style>
