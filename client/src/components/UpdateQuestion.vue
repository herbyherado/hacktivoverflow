<template>
  <div class="modal" :id="'updatequestion' + index">
    <div class="form">
      <h2>Update Question</h2><span style="float:right;cursor:pointer;margin-top:-3em;" @click='closemodal(index)'>&times;</span>
      <p type="Title">
        <input v-validate="'required'" name="update-title" :id="'update-title' + index" :value='question.title'>
        <span style="color:red;font-size:10px;" v-show="errors.has('update-title')" class="help is-danger">{{ errors.first('update-title') }}</span>
      </p>
      <p type="Description">
        <textarea v-validate="'required'" name="update-description" :id="'update-description' + index" :value='question.description'></textarea>
        <span style="color:red;font-size:10px;" v-show="errors.has('update-description')" class="help is-danger">{{ errors.first('update-description') }}</span>
      </p>
      <div class="buttons">
        <button @click='closemodal(index)' class="rad-button warning flat" id ="rad-button">Cancel</button>
        <button @click='updatequestion(question._id, index)' class="rad-button good flat" id="rad-button">Update</button>
      </div>
    </div>
    {{question}}
  </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: 'UpdateQuestion',
  props: ['question', 'index'],
  methods: {
    closemodal: function (index) {
      let modal = document.getElementById('updatequestion' + index)
      modal.style.display = 'none'
    },
    updatequestion: function (id, index) {
      let token = localStorage.getItem('token')
      let title = document.getElementById('update-title' + index).value
      let description = document.getElementById('update-description' + index).value
      this.$validator.validateAll().then(val => {
        if (val) {
          this.$http.put(`/questions/${id}`, {
            title: title,
            description: description
          }, {
            headers: { token }
          })
            .then(post => {
              swal({
                title: 'Question Updated!',
                text: 'Please check again in a bit for response',
                type: 'success',
                showConfirmButton: true
              }).then(res => {
                window.location.reload()
              })
            })
            .catch(err => {
              swal({
                type: 'error',
                title: 'Oops...',
                text: 'Please make sure you are logged in!'
              })
              console.log(err)
            })
        } else {
          console.log('error: unable to post')
        }
      })
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
input::-webkit-input-placeholder{
  font-size: 20px
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
textarea {
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
