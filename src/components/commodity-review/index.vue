<template lang="html">
  <div class="review">
    <h5 class='title'>Write Your Own Review</h5>
    <div class="rate">
      <p class='tips'>How do you rate this product?</p>
      <div class="input">
        <span class='show-result' v-model='rate'>{{rate}}</span>
        <select class="select" name="" v-model='rate'>
          <option value=""></option>
          <option value="5 stars (best)">5 stars (best)</option>
          <option value="4 stars">4 stars</option>
          <option value="3 stars (average)">3 stars (average)</option>
          <option value="2 stars">2 stars</option>
          <option value="1 stars (worst)">1 stars (worst)</option>
        </select>
        <i class='iconfont icon-f11-copy'></i>
      </div>
    </div>

    <div class="headline">
      <p class='tips'>Write a headline for your review here:</p>
      <input type="text" name="" value="">
    </div>

    <div class="content">
      <p class='tips'>Write your review here:</p>
      <textarea name="name" rows="8" cols="60"></textarea>
    </div>

    <div class="email">
      <p class='tips'>Your email:</p>
      <input type="email" name="" value="">
    </div>

    <div class="name">
      <p class='tips'>Enter your name: (optional)</p>
      <input type="text" name="" value="">
    </div>

    <button type="button" name="button" class='submit' @click='submit()'>Save My Review</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rate: null
    }
  },
  methods: {
    submit() {
      this.$message({
        message: 'thanks',
        type: 'success'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.review {
    .title {
        color: #333;
        font-weight: bold;
        font-size: 12px;
        margin-top: 16px;
    }
    .tips {
        color: #333;
        font-weight: 600;
    }
    .rate {
        margin: 10px 0;
        .input {
            display: flex;
            align-items: center;
            span {
                width: 100px;
                height: 20px;
                color: #b6afa7;
                cursor: pointer;
                background-color: white;
                border-radius: 0;
                font-style: italic;
                border: 1px solid $gray-border;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                // z-index: -1;
            }
            .select {
                width: 100px;
                height: 20px;
                color: #b6afa7;
                cursor: pointer;
                background-color: white;
                border-radius: 0;
                font-style: italic;
                border: 1px solid $gray-border;
            }
            .select {
                opacity: 0;
            }
            input {
                position: absolute;
            }
            i {
                width: 30px;
                height: 22px;
                border: 1px solid $gray-border;
                border-left: 0;
                font-size: 20px;
                color: $gray-bottom-color;
                padding-top: 2px;
                box-sizing: border-box;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
        }

    }
    .email,
    .headline,
    .name {
        input {
            border: 1px solid $gray-border;
            width: 100px;
            height: 20px;
            color: #b6afa7;
        }
    }
    .content {
        margin: 10px 0;
        textarea {
            border: 1px solid $gray-border;
            padding-top: 6px;
            color: #b6afa7;
        }

    }
    .name {
        margin-top: 10px;
    }
    .submit {
        width: 120px;
        height: 25px;
        font-size: 14px;
        margin: 20px 0;
        background-color: #7082b3;
        color: white;
        font-weight: 400;
        &:hover {
            // box-shadow: 0 120px 1px red inset;
            opacity: 0.8;
        }

    }
}
</style>
