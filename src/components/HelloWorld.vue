<template>
  <div id="hello">
    <h1>{{ msg }}<h4>Safe & Secure Web Conferencing Tool</h4></h1>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="white" text-color="black" label="Sign In" />
    <q-btn color="primary" label="Create Account" />
    </div>
    <div style="padding-bottom:50px;">
    <p>
      Developed and Managed by,<br>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Q Solutions</a>.
    </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

h1 {
  font-size:85px;
  margin:0;
}
h3 {
  margin-left: 20px;
  margin-right: 20px;
}

a {
  color: #42b983;
}


</style>
