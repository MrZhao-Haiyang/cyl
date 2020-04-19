<template>
  <div id="app">
    <ImageBox />
    <Content />
    <Message />
    <Message />
    <Message />
    <Message />
    <InputBox />
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
  }
};
</script>

<style>
#app {
  padding-bottom: 4rem;
}
</style>
