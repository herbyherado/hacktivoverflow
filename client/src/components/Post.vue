<template>
  <div>
    <heading></heading>
    <div class="body-post">
      <div class="post-title">
        hello world
      </div>
      <div class="post-desc">
        <div class="q-vote">
          <div class="q-upvote">
            <img src="../assets/arrow.png" alt="" class="sr">
          </div>
          <div class="q-total"> 0 </div>
          <div class="q-downvote">
            <img src="../assets/arrow.png" alt="" class="sr" style="transform:rotate(180deg);">
          </div>
        </div>
        <div class="q-desc">
          this is the question field that supposed to... have the question description
          this is the question field that supposed to... have the question description
          this is the question field that supposed to... have the question description
          this is the question field that supposed to... have the question description
          this is the question field that supposed to... have the question description
          this is the question field that supposed to... have the question description
          this is the question field that supposed to... have the question description
        </div>
      </div>
      <div class="totalanswer">
        2 Answer
      </div>
      <div class="post-answer">
        <div class="a-vote">
          <div class="a-upvote">
            <img src="../assets/arrow.png" alt="" class="sr">
          </div>
          <div class="a-total"> 0 </div>
          <div class="a-downvote">
            <img src="../assets/arrow.png" alt="" class="sr" style="transform:rotate(180deg);">
          </div>
        </div>
        <div class="a-desc">
          this is an answer field, only the smart can answer 
          this is an answer field, only the smart can answer 
          this is an answer field, only the smart can answer 
          this is an answer field, only the smart can answer 
        </div>
      </div>
      <!--  -->
      <div class="post-answer">
        <div class="a-vote">
          <div class="a-upvote">
            <img src="../assets/arrow.png" alt="" class="sr">
          </div>
          <div class="a-total"> 0 </div>
          <div class="a-downvote">
            <img src="../assets/arrow.png" alt="" class="sr" style="transform:rotate(180deg);">
          </div>
        </div>
        <div class="a-desc">
          this is an answer field, only the smart can answer 
          this is an answer field, only the smart can answer 
          this is an answer field, only the smart can answer 
          this is an answer field, only the smart can answer 
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
            <button class="rad-button good flat" style="float:right; margin-right:2em">Post Answer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  name: 'Post',
  components: {
    Heading: Heading
  },
  data () {
    return {
      comment: ''
    }
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

  .q-vote, .a-vote {
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
    grid-template-columns: 1fr 7fr;
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
	line-height:60px;
  padding: 2px 10px;
  border: 0.5px solid silver;
  border-radius: 5px 5px 5px 5px;
}

</style>
