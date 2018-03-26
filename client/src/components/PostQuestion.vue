<template>
  <div class="modal" id="postquestion">
    <div class="form">
      <h2>Post Question</h2><span style="float:right;cursor:pointer;margin-top:-3em;" @click='closemodal'>&times;</span>
      <p type="Title">
        <input v-validate="'required'" name="title" id="input-title" v-model='title' placeholder="Write your question title...">
        <span style="color:red;font-size:10px;" v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>
      </p>
      <p type="Description">
        <textarea v-validate="'required'" name="description" id="input-description" v-model='description' placeholder="Enter your description here.."></textarea>
        <span style="color:red;font-size:10px;" v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</span>
      </p>
      <div class="buttons">
        <button @click='closemodal' class="rad-button warning flat" id ="rad-button">Cancel</button>
        <button class="rad-button good flat" id="rad-button"> Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostQuestion',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    closemodal: function () {
      let modal = document.getElementById('postquestion')
      modal.style.display = 'none'
    }
  }
}
</script>

<style scoped>
/* modal  */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: scroll; /*Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.form {
  width: 80%;
  height: 50%;
  background: #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  margin: 15% auto;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
}
h2 {
  margin: 10px 0;
  padding-bottom: 10px;
  /* width: 180px; */
  color: #78788c;
  border-bottom: 3px solid #78788c;
}
input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;
}
input:focus {
  border-bottom: 2px solid #78788c;
}
p {
  text-align: left;
  /* margin-left: 2em; */
  padding: 0 2em;
}
p:before {
  content: attr(type);
  display: block;
  margin: 28px 0 0;
  font-size: 14px;
  color: #5a5a5a;
}
.buttons > button {
  margin: 10px 60px;
}
#input-description {
  margin-top: 20px;
	width:100%;
	overflow:hidden;
	background-color:#FFF;
	color:#222;
	font-family: Helvetica, Arial;
	font-weight:normal;
	font-size:12px;
	resize:none;
	line-height:40px;
  padding: 2px 10px;
}
button:hover {
  background: #78788c;
  color: #fff;
}
.foot {
  content: "Hi";
  position: absolute;
  bottom: -15px;
  right: -20px;
  background: #50505a;
  color: #fff;
  width: 320px;
  padding: 16px 4px 16px 0;
  border-radius: 6px;
  font-size: 13px;
  box-shadow: 10px 10px 40px -14px #000;
}
span {
  margin: 0 5px 0 15px;
}
</style>
