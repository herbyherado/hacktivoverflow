<template>
<div class="contain">
  <div class="header">
    <div class="logo">
      <img src="@/assets/sologo.png" alt="" class="s" style="height:30px;">
    </div>
    <div class="items">&zwnj;</div>
    <div class="login">
      <button class="rad-button wwt flat" id="rad-button">Log In</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Heading'
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
