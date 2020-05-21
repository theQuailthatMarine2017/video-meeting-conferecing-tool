<template>
  <div class="home">
    
    <HelloWorld msg="Shirikia"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.home{
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");

    
    height: 100%;

    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top:35px;
}



</style>
