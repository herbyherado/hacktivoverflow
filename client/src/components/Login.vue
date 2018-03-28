<template>
<div class="bodyBox">
<!-- <button class="rad-button wwt flat" id="rad-button" @click='openModal()'>
  Sign in
</button> -->
<div class="loginWrapper">
   <div class="bodyLogin">
     <i class="fas fa-code codeIcon"></i><span style="float: right;cursor:pointer" @click='closeModal()'>&times;</span>
     <form>
      <h3 style="text-align: center;">Log In</h3>
      <input type="text" class="username" v-model='username' placeholder="Username">
      <input type="password" class="password" v-model='password' placeholder="Password">
      <!-- <input type="checkbox" class="remember"> <span class="labelCheck">Remember me</span> -->
      <button class="loginBtn" @click='login()' type="submit">
        Login now
      </button>
    </form>
  </div>
</div>
  
</div>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    openModal () {
      var modal = document.getElementsByClassName('loginWrapper')[0]
      var bgchange = document.getElementsByClassName('bodyBox')[0]
      modal.style.display = 'block'
      bgchange.setAttribute('class', 'fadeBox')
    },
    closeModal () {
      // var close = document.getElementsByClassName('closeBtn')[0]
      var modal = document.getElementsByClassName('loginWrapper')[0]
      modal.style.display = 'none'
    },
    login () {
      this.$http.post('/users/login', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          console.log(response)
          localStorage.setItem('token', response.data.token)
          this.closeModal()
          swal({
            type: 'success',
            text: 'You are now logged in'
          }).then((next) => {
            window.location.reload()
          })
        })
        .catch(err => {
          console.log(err)
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Your username/password may be wrong!'
          }).then((next) => {
            window.location.reload()
          })
        })
    }
  }
}
</script>

<style>
.fadeBox {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.2);
  transition: .40s;
}

.titleP {
  font-size: 2em;
  color: rgba(0,0,0,.6);
  font-weight: 400;
  font-family: 'Anton', sans-serif;
  text-transform: uppercase;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%,0%);
}

.signinIcon {
  font-size: 1.2em;
}

.descP {
  font-family: 'Ubuntu Mono', monospace;
  color: #fff;
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%,-42%);
}

.loginWrapper {
  width: 320px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  animation: .40s openModal linear;
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
  min-height: 308px;
  z-index: 10;
}

.bodyLogin {
  width: 300px;
  margin: 60px 0px;
}

.username {
  outline: none;
  border: 1px solid lightgrey;
  padding: 10px 10px;
  min-width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.password {
  outline: none;
  border: 1px solid lightgrey;
  padding: 10px 10px;
  min-width: 80%;
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
}

.remember {
  margin: 0px 5px 0px 15px;
  min-width: 80%;
  position: absolute;
  left: 15px;
  top: 210px;
  transform: translateX(-50%);
}

.labelCheck {
  font-family: sans-serif, arial;
  font-size: .8em;
  color: grey;
  position: absolute;
  left: 40px;
  top: 210px;
}

.loginBtn {
  outline: none;
  border: none;
  padding: 20px 0px;
  width: 100%;
  display: table;
  cursor: pointer;
  color: #fff;
  font-size: 1em;
  background: rgb(18,67,235);
  position: absolute;
  top: 250px;
}

.loginBtn:hover {
  transition: .40s;
  background: rgb(234,83,24);
  color: white;
}

#logIn {
  background: white;
  color: grey;
  border: none;
  font-size: 1em;
  padding: 10px 60px;
  font-weight: 600;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -53%);
  border-radius: 3px;
  outline: none;
}

#logIn:hover {
  transition: .40s;
  background: rgba(0,0,0,.4);
  color: white;
  cursor: pointer;
}

.closeBtn {
  background: rgba(0,0,0,.5);
  border: none;
  color: #fff;
  font-size: 2em;
  padding: 13px 25px;
  position: absolute;
  outline: none;
  top: 0px;
  right: 0px;
  cursor: pointer;
}

.closeBtn:hover {
  transition: 1s;
  background: rgba(0,0,0,.8);
}

@keyframes animateBackground {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes openModal {
  from { opacity: 0; }
  to { opacity: 1; }
}

.codeIcon {
  font-size: 2em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 30px;
  color: orangered;
  margin: 0;
  padding: 0;
  animation: 3s changeColor linear infinite;
}
@keyframes changeColor {
  0%, 100% { color: orangered; }
  50% { color: crimson; }
}
</style>
