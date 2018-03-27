<template>
  <div>
    <heading></heading>
    <div class="mainbody">
      <div class="titlebody">Manage My Questions</div>
      <div class="q-container">
        <div class="q-list" v-for='(question, i) in showques' :key='i'>
          <div class="votes">
            <div class="votetotal"> {{ question.upvote - question.downvote }}</div>
            <div class="votedesc">Votes</div>
          </div>
          <div class="q-title">{{ question.title }}</div>
          <div class="modif">
            <div class="update">
              <update-question :question='question' :index='i'></update-question>
              <button @click='showmodal(i)' class="rad-button warning flat" id="rad-button">
                Update
              </button>
            </div>
            <div class="remove"><button @click='remove(question._id)' class="rad-button danger flat" id="rad-button">Delete</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
import UpdateQuestion from '@/components/UpdateQuestion'
import Heading from '@/components/Heading'

export default {
  name: 'MyQuestions',
  data () {
    return {
      qlist: []
    }
  },
  computed: {
    showques () {
      return this.qlist
    }
  },
  methods: {
    remove (id) {
      this.$http.delete(`/questions/${id}`)
        .then(res => {
          console.log(res)
          swal({
            title: 'Question Deleted!',
            text: 'Record was deleted',
            type: 'success'
          })
          setTimeout(function () {
            window.location.reload()
          }, 2000)
        })
        .catch(err => {
          console.log(err)
        })
    },
    showmodal: function (index) {
      let modal = document.getElementById('updatequestion' + index)
      modal.style.display = 'block'
    }
  },
  components: {
    Heading: Heading,
    UpdateQuestion: UpdateQuestion
  },
  created () {
    let token = localStorage.getItem('token')
    // console.log(token)
    this.$http.post('/questions/myquestions/', {}, {
      headers: { token }
    })
      .then(response => {
        console.log(response.data.ques)
        this.qlist.push(...response.data.ques)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
  .mainbody{
    margin: 0 20vw;
  }
  .titlebody {
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 40px;
    margin-top: 1.5em;
  }
  .q-container {
    margin-top:3em;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
  }
  .q-list {
    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    padding:15px;
    border-bottom: 0.5px solid silver;
  }

  .votes {
    display: grid;
    grid-template-columns: auto;
    text-align: center;
  }
  .q-title{
    padding: 10px;
  }

  .modif {
    text-align: center;
    display:grid;
    grid-template-columns: auto;
    grid-row-gap: 5px;
  }

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
  width: 70px;
  height: 25px;
  font-size: 12px;
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

</style>
