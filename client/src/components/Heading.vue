<template>
<div class="contain">
  <div class="header">
    <div class="logo">
      <router-link to="/"><img src="@/assets/sologoedit.png" alt="" class="s" style="height:30px;"></router-link>
    </div>
    <div class="items" v-if="!checkToken" style="margin-top:auto; margin-bottom:auto;">&zwnj;</div>
    <div class="items" v-else style="margin-top:auto; margin-bottom:auto;"><router-link to='/myquestions'> My Questions</router-link></div>
    <div class="login">
      <button v-if="!checkToken" @click='openlogin()' class="rad-button wwt flat" id="rad-button">Log In</button>
      <button v-else @click='logouts()' class="rad-button danger flat" id="rad-button">Sign Out</button>
    </div>
  </div>
  <login></login>
</div>
</template>

<script>
import swal from 'sweetalert2'
import Login from '@/components/Login'
export default {
  name: 'Heading',
  data () {
    return {
      hasToken: null
    }
  },
  components: {
    Login: Login
  },
  methods: {
    openlogin: function () {
      let modal = document.getElementsByClassName('loginWrapper')[0]
      modal.style.display = 'block'
    },
    closeModal: function () {
      let modal = document.getElementsByClassName('loginWrapper')[0]
      modal.style.display = 'none'
    }
  },
  computed: {
    checkToken: function () {
      return this.hasToken
    },
    logouts: function () {
      localStorage.clear()
      swal({
        type: 'success',
        text: 'You are now signed out'
      }).then((next) => {
        window.location.reload()
        this.$router.push('/')
      })
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

@media all and (max-width: 600px){
  .header {
    grid-template-columns: auto;
    grid-row-gap: 20px;
  }
}
</style>
