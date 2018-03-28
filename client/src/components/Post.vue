<template>
  <div>
    <heading></heading>
    <div class="body-post">
      <div class="post-title">
        {{ showThread.title }}
      </div>
      <div class="post-desc">
        <div class="q-vote">
          <div class="q-upvote" @click='upQues(showThread._id)'>
            <img src="../assets/arrow.png" alt="" class="sr">
          </div>
          <div class="q-total"> {{ showThread.upvote.length - showThread.downvote.length }} </div>
          <div class="q-downvote" @click='downQues(showThread._id)'>
            <img src="../assets/arrow.png" alt="" class="sr" style="transform:rotate(180deg);">
          </div>
        </div>
        <div class="q-desc"> {{ showThread.description }} </div>
      </div>
      <div class="totalanswer">
        {{ showThread.answer.length }} {{ pluralize }}
      </div>
      <div class="post-answer" v-for="(ans, i) in showThread.answer" :key='i'>
        <div class="a-vote">
          <div class="a-upvote" @click='upAns(ans._id)'>
            <img src="../assets/arrow.png" alt="" class="sr">
          </div>
          <div class="a-total">{{ ans.upvote.length - ans.downvote.length }} </div>
          <div class="a-downvote" @click='downAns(ans._id)'>
            <img src="../assets/arrow.png" alt="" class="sr" style="transform:rotate(180deg);">
          </div>
        </div>
        <div class="a-desc">
          {{ ans.answer }}
          <!-- {{ ans }} -->
        </div>
        <div class="delbutton">
          <button v-if='ans.user === user' @click='remove(ans._id)' class="rad-button danger flat" id="rad-button">delete</button>
          <!-- <button class="rad-button danger flat" id="rad-button">delete</button> -->
        </div>
      </div>
      <!--  -->
      <div class="commentsection">
        <div class="commentitle">
          Your Answer
        </div>
        <div class="formsection">
          <div class="commentform">
            <textarea v-validate="'required'" name="comment" id="comment" v-model='comment' placeholder="Enter your comment here.."></textarea>
            <br>
            <span style="color:red;font-size:10px;" v-show="errors.has('comment')" class="help is-danger">{{ errors.first('comment') }}</span>
          </div>
          <div class="commentbutton">
            <button @click='submitAnswer' class="rad-button good flat" style="float:right; margin-right:2em">Post Answer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
import Heading from '@/components/Heading'

export default {
  name: 'Post',
  components: {
    Heading: Heading
  },
  data () {
    return {
      comment: '',
      threads: [],
      user: ''
    }
  },
  methods: {
    submitAnswer: function () {
      let token = localStorage.getItem('token')
      console.log(token)
      this.$validator.validateAll()
        .then((val) => {
          if (val) {
            // console.log('valid')
            console.log(this.$route.params.id)
            this.$http.post(`/answers/${this.$route.params.id}`, {
              answer: this.comment
            },
            {
              headers: {token}
            })
              .then(submission => {
                // console.log('dapet hasil')
                console.log(submission)
                this.comment = ''
                window.location.reload()
              })
              .catch(error => {
                console.log(error)
                swal({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Please make sure you are logged in!'
                })
              })
          } else {
            console.log('unable to post empty field')
            // pop up field is empty
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    remove (id) {
      this.$http.delete(`/answers/${id}`)
        .then(response => {
          console.log(response)
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
        })
      // console.log(id)
    },
    upAns: function (ansId) {
      console.log(ansId, this.user)
      this.$http.get(`/answers/${ansId}/upvote/${this.user}`)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    },
    downAns: function (ansId) {
      console.log(ansId, this.user)
      this.$http.get(`/answers/${ansId}/downvote/${this.user}`)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    },
    upQues: function (quesId) {
      console.log(quesId)
      this.$http.get(`/questions/${quesId}/upvote/${this.user}`)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    },
    downQues: function (quesId) {
      console.log(quesId)
      this.$http.get(`/questions/${quesId}/downvote/${this.user}`)
        .then(res => {
          console.log(res)
          window.location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    showThread: function () {
      // console.log(this.threads)
      return this.threads[0]
    },
    pluralize: function () {
      return (this.threads[0].answer.length > 1) ? 'Answers' : 'Answer'
    }
  },
  created () {
    let token = localStorage.getItem('token')

    this.$http.post('/users/check', {}, {
      headers: { token }
    })
      .then(user => {
        console.log(user)
        this.user = user.data.userId
      })
      .catch(err => {
        console.log(err)
      })

    this.$http.get(`/questions/${this.$route.params.id}`)
      .then(question => {
        // console.log(question)
        this.threads.push(question.data.question)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
  .body-post {
    margin-top: 3vw;
    margin-left: 10vw;
    margin-right: 10vw;
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
  }
  .post-title {
    font-size: 30px;
    padding-bottom: 1vw;
    border-bottom: 1px solid silver;
  }

  @media all and (max-width: 600px) {
    .post-title {
      font-size: 20px;
    }
  }

  .q-vote, .a-vote, .delbutton {
    grid-template-columns: auto;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  img {
    height: 20px;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.10)
  }

  .post-desc, .post-answer {
    display: grid;
    grid-template-columns: 1fr 7fr 2fr;
    border-bottom: 0.5px solid silver;
  }
  .q-desc, .a-desc {
    text-align: left;
    font-size: 15px;
    padding: 15px 10px;
  }

  .totalanswer, .commentitle {
    padding: 10px 0;
    margin: 10px 0px;
    text-align: left;
    font-size: 20px;
    text-decoration: double;
  }

  .post-answer {
    border-bottom: 0.5px solid silver;
  }

  .post-answer:first-child {
    border-top: 0.5px solid silver;
  }
  .commentbutton {
    margin-top: 2em;
  }
  #comment {
  margin-top: 10px;
	width:95%;
	overflow:hidden;
	background-color:#FFF;
	color:#222;
	font-family: Helvetica, Arial;
	font-weight:normal;
	font-size:12px;
	resize:none;
	line-height:20px;
  height: 20vw;
  padding: 2px 10px;
  border: 0.5px solid silver;
  border-radius: 5px 5px 5px 5px;
  resize: vertical;
}
/* button */

.rad-button {
  white-space: nowrap;
  top: 0px;
  border-radius: 4px;
  position: relative;
  border: none;
  background: none;
  font-family: "Roboto", sans-serif;
  width: 200px;
  height: 50px;
  cursor: pointer;
  transition: 0.1s all ease;
  font-size: 16px;
  font-weight: 300;
  color: #777;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 0px 0px 0px #b8b8b8;
}
#rad-button {
  width: 100px;
  height: 35px;
}
.rad-button:focus {
  outline: 0;
}
.rad-button:hover {
  background-color: #f5f5f5;
  top: -2px;
  height: 52px;
  border-bottom: 4px solid #ccc;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
}
.rad-button:hover.static {
  top: 0px;
  height: 50px;
}
.rad-button:active {
  top: 0px;
  height: 50px;
  border: 1px solid #ccc;
  background-color: #ededed;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);
}

.rad-button.good {
  background-color: #b9e9ce;
  color: #759f87;
  border-bottom: 1px solid #759f87;
}
.rad-button.good:hover {
  background-color: #caf3db;
  top: -2px;
  border-bottom: 4px solid #759f87;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
}
.rad-button.good:active {
  top: 0px;
  border: 1px solid #759f87;
  background-color: #a5dabc;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.rad-button.danger {
  background-color: #e7a796;
  color: #7b5348;
  border-bottom: 1px solid #7b5348;
}
.rad-button.danger:hover {
  background-color: #f2beb1;
  top: -2px;
  border-bottom: 4px solid #7b5348;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
}
.rad-button.danger:active {
  top: 0px;
  border: 1px solid #7b5348;
  background-color: #d69280;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.rad-button.warning {
  background-color: #f3eac5;
  color: #bd8d32;
  border-bottom: 1px solid #bcb496;
}
.rad-button.warning:hover {
  background-color: #faf5df;
  top: -2px;
  border-bottom: 4px solid #bcb496;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
}
.rad-button.warning:active {
  top: 0px;
  border: 1px solid #bcb496;
  background-color: #e6dcb5;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.rad-button.wwt {
  background-color: #32699b;
  color: #DBE9F5;
  border-bottom: 1px solid #1A4164;
}
.rad-button.wwt:hover {
  background-color: #427BAE ;
  top: -2px;
  border-bottom: 4px solid #1A4164;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
}
.rad-button.wwt:active {
  top: 0px;
  border: 1px solid #1A4164;
  background-color: #255988;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
}
</style>
