<template>
  <div class="msg-box">
    <div class="left-box">
      <img class="head-box" src="../assets/demo1.png" alt="" />
    </div>
    <div class="middle-box">
      <div class="name-box">{{ msg.nickname }}</div>
      <div class="date-box">{{ msg.create_time }}</div>
      <div class="text-box">{{ msg.message }}</div>
    </div>
    <!--<div class="right-box">-->
    <!--<div class="num-box">29</div>-->
    <!--<img class="hand-box" src="../assets/greyhand.png" alt="" />-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["msg"]
};
</script>

<style scoped>
.msg-box {
  margin: 0.2rem;
  display: flex;
  flex-direction: row;
  padding: 0.2rem 0;
  background-color: #eaeaea;
}
.left-box {
  width: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.head-box {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
}
.middle-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 0.2rem;
}
.name-box {
  height: 0.3rem;
  font-size: 0.25rem;
}
.date-box {
  height: 0.3rem;
  font-size: 0.25rem;
}
.text-box {
  flex: 1;
  font-size: 0.3rem;
}
.right-box {
  width: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-right: 0.1rem;
}
.num-box {
  width: 0.4rem;
  height: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-size: 0.3rem;
  color: #2d374b;
}
.hand-box {
  width: 0.4rem;
  height: 0.4rem;
}
</style>
