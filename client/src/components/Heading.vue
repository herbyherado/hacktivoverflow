<template>
<div class="contain">
  <div class="header">
    <div class="logo">
      <router-link to="/"><img src="@/assets/sologoedit.png" alt="" class="s" style="height:30px;"></router-link>
    </div>
    <div class="items" style="margin-top:auto; margin-bottom:auto;">&zwnj;My Questions</div>
    <div class="login">
      <button v-if="!checkToken" class="rad-button wwt flat" id="rad-button">Log In</button>
      <button v-else class="rad-button danger flat" id="rad-button">Sign Out</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Heading',
  data () {
    return {
      hasToken: null
    }
  },
  computed: {
    checkToken: function () {
      return this.hasToken
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.hasToken = true
    } else {
      this.hasToken = false
    }
  }
}
</script>

<style scoped>

* {
  font-family: Helvetica, Arial, sans-serif;
}

.contain{
  width: 100%;
  top: 0;
  margin: 0;
  border-top: 4px solid rgb(239, 106, 29)
}

.header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  padding: 20px;
  border-bottom: 0.5px solid lightgrey;
}
</style>
