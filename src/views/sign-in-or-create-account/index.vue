<template lang="html">
  <div class="sign-in">
    <h1>Sign in or Create Account</h1>
    <div class="main">
      <div class="left-container">
        <p class='title'><i class='iconfont icon-icon2'></i>CREATE A NEW ACCOUNT</p>
        <p class='desc'>Create an account with us and you'll be able to:</p>
        <ul>
          <li v-for='(item, index) in items' :key='index'>{{item}}</li>
        </ul>
        <!-- <button type="button" class='create-account' name="button"></button> -->
        <router-link tag='button' class='create-account' :to="{name: 'createAccount'}">Click here to create a new account</router-link>
      </div>
      <div class="right-container">
        <p class='title'><i class='iconfont icon-icon2'></i>SIGN IN</p>
        <p class='write-msg'><span class='tip'>Email Address:</span><input type="text" name="" value="" placeholder='Email'></p>
        <p class='write-msg'><span class='tip'>Password:</span><input type="password" name="" value="" placeholder='Password'></p>
        <div class='bottom-btn'><button type="button" name="button" class='sign'>Sign In</button><span>Forgot your password?</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        `Check out faster`,
        `Save multiple shipping addresses`,
        `Access your order history`,
        `Track new orders`,
        `Save items to your wish list`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.sign-in {
    h1 {
        @extend .h1-style;
    }
    .main {
        width: 75%;
        max-width: 700px;
        margin: 10px auto;
        display: flex;
        .left-container,
        .right-container {
            width: 50%;
            display: flex;
            flex-flow: column;
            .desc {
                font-size: 10px;
                line-height: 20px;
                color: #323433;
                margin-left: 6px;
            }
        }
        .title {
            font-size: 12px;
            color: #7082b3;
            text-transform: uppercase;
            font-weight: 300;
            i {
                color: $gray-color;
            }
        }
        button {
            height: 20px;
            background: #fff;
            color: #7082b3;
            border: 1px solid #7082b3;
            font-size: 10px;
            font-weight: 400;
            &:hover {
                background-color: #7082b3;
                color: white;
            }
        }
        .left-container {
            justify-content: space-around;
            ul {
                margin-top: 10px;
            }
            li {
                list-style: initial;
                margin-left: 20px;
                font-size: 10px;
                color: #323433;
            }
            .create-account {
                width: 60%;
                height: 20px;
                margin: 20px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #fff;
                color: #7082b3;
                border: 1px solid #7082b3;
                font-size: 10px;
                font-weight: 400;
                &:hover {
                    background-color: #7082b3;
                    color: white;
                }
            }
        }
        .right-container {
            font-size: 10px;
            color: #323433;
            .write-msg {
                margin-top: 8px;
                .tip {
                    width: 50%;
                    max-width: 70px;
                    display: inline-block;
                }
                input {
                    width: 50%;
                    max-width: 150px;
                    height: 20px;
                    border: 1px solid $gray-border;
                }
            }
            div:nth-of-type(1) {
                // background-color: red;
                margin-top: 16px;
                display: flex;
                flex-flow: row;
                align-items: center;
                .sign {
                    width: 20%;
                    height: 25px;
                }
                span {
                    margin-left: 3px;
                    color: #999999;
                    cursor: pointer;
                }
            }

        }
    }
}
</style>
