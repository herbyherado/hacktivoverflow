<template>
  <div>
    <div class="header">
      <heading></heading>
    </div>
    <div class="body">
      <div class="bodytitle">
        <div class="qtitle">
          Questions
        </div>
        <div class="addpost">
          <button class="rad-button good flat" @click='showmodal'>Post Question</button>
          <!-- modal -->
          <post-question></post-question>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <div class="board">
        <div class="question">
          <div class="votes">
            <div class="total">1</div>
            <div class="desc">votes</div>
          </div>
          <div class="answer">
            <div class="total">1</div>
            <div class="desc">answer</div>
            </div>
          <div class="questiontitle">hello dunia ini bukan asdklfj alskdfj a;lksjf kal;sdjf l;kasdjf akl;s</div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import PostQuestion from '@/components/PostQuestion'

export default {
  name: 'Main',
  components: {
    Heading: Heading,
    PostQuestion: PostQuestion
  },
  methods: {
    showmodal: function () {
      let modal = document.getElementById('postquestion')
      modal.style.display = 'block'
    },
    closemodal: function () {
    }
  }
}
</script>

<style>
.body {
  margin-top: 4em;
}
.bodytitle {
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 30px;
  margin-bottom: 1.5em;
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-left: 20vw;
  margin-right: 20vw;
  grid-row-gap: 40px;
}
.qtitle {
  text-align:left;
  margin-left: 1em;
}

@media all and (max-width: 600px){
  .bodytitle {
    grid-template-columns: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .qtitle {
    margin-left: 0;
    text-align: center;
  }
}

.board {
  margin: 0 10vw;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
  border-bottom: 0.2px solid silver
}
.board:first-child {
  border-top: 0.2px solid silver;
}
.question {
  display:grid;
  grid-template-columns: 1fr 1fr 4fr; 
  padding: 10px;
}
.votes, .answer {
  text-align:center;
  vertical-align: middle;
  justify-content: center;
  padding: 3px 3px;
  margin-top: auto;
  margin-bottom: auto;
  transition: all 0.3s ease-in-out;
}

.votes:hover, .answer:hover {
  border: 0.5px solid rgb(20, 208, 20);
  color: rgb(20, 208, 20);
}
.questiontitle {
  padding: 3px 3px; 
}

@media all and (min-width: 600px){
  .board {
    margin: 0 20vw;
    font-size: 16px;
  }
  .question {
    display:grid;
    grid-template-columns: 1fr 1fr 6fr; 
  }

  .votes, .answer {
    padding: 10px 10px;
  }

  .questiontitle {
    padding: 10px 10px;
  }
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
