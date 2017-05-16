<template>
  <div class="center test">
    <h1>{{ testMsg }}</h1>
    <input v-focus v-model="inValue" class="form-control">
    {{ inValue }}
  </div>
</template>

<script>
export default{
  name: 'TestRouter',
  data () {
    return {
      testMsg: 'This text from CoffeeScript to vue router',
      inValue: ''
    }
  }
}
</script>

<style lang="sass">
  $inputHeight: 35px;
  .test
    line-height: 25em;
    input
      height: $inputHeight;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
      padding: 3vmin 1vmin;
      font-size: $inputHeight;

</style>
