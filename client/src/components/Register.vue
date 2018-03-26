<template>
   <div class="register-board">
      <div class="reg-title">
        Register Now
      </div>
      <form action="">
        <span class="form-label">
          <input type="text" v-model='username' v-validate="'required'" minlength="5" name="username"/>
          <span style="color:white;font-size:15px;" v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
          <label for="username">Username</label>
        </span>
        <span class="form-label">
          <input v-validate="'required|email'" v-model='email' type="text" name="email"/>
          <span style="color:white;font-size:15px;" v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          <label for="email">Email</label>
        </span>
        <span class="form-label">
          <input v-validate="'required'" type="password" v-model='password' name="password"/>
          <span style="color:white;font-size:15px;" v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
          <label for="password">Password</label>
          <button class="rad-button wwt flat register" id="rad-button">Register</button>
        </span>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  }
}
</script>

<style>
/* form */
.register-board {
  margin-top: auto;
  margin-bottom: auto;
  padding: 40px 0px;
  font-family: Helvetica, Arial, sans-serif;
  /* right: 10vw; */
  /* text-align:center; */
}
.form-label {
    position:relative;
    display:block;
    clear:both;
/*     width:400px; */
    max-width:400px;
    margin:0 auto;
}

label {  
  -webkit-transform: translateY(50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(50%);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  position: absolute;
  top: 20%;
  left: 1em;
  background:none;
  color: #b3b3b3;
  font-weight: normal;
  cursor: text;
  pointer-events: none;
  font-family: sans-serif;
}

input {
   display:block;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-transition: border-color;
  -moz-transition: border-color;
  transition: border-color;
  box-sizing: border-box;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #DDD;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.06);
  font-family: sans-serif;
  font-size: 1em;
  margin-right: 0;
  margin-bottom: 0.75em;
  padding: 0.5em 0.5em;
  padding:1em;
  width: 100%;
}

input:focus~label,
input.hascontent~label {
  top: -30%;
  font-size: .8em;
  padding: 0 .3em;
  background:#F9F9F9;   
}

.register {
  float:right;
  margin-right: auto;
  margin-left: auto;
}

.reg-title {
  text-align: center;
  margin-bottom: 20px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: white;
}
</style>
