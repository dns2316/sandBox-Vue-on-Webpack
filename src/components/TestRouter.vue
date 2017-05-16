<template>
  <div class="center test"><h1>{{ testMsg }}</h1></div>
</template>

<script>
export default{
  name: 'TestRouter',
  data () {
    return {
      testMsg: 'This text from CoffeeScript to vue router'
    }
  }
}
</script>
