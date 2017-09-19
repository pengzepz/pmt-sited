<template lang="html">
  <div class="contact-us">
    <h1>Contact Us</h1>
    <div class="body">
      <div class="left-img">
        <img src="../../assets/img/vcontact.jpg" alt="">
      </div>
      <div class="right-form">
        <p class='desc'>We'd Love to Hear from You!</p>
        <input type="text" name="" value="" placeholder='Name*'>
        <input type="text" name="" value="" placeholder='Email*'>
        <input type="text" name="" value="" placeholder='Phone Number*'>
        <textarea name="name" rows="8" cols="80"  placeholder='Comments or questions'></textarea>
        <p class='submit-btn'><span>*required fields</span> <button type="button" name="button">Submit</button></p>
        <div class="list">
          <div class="li">
            <img src="../../assets/img/locationicon.png" alt="">
            <p>VERDUGO GIFT</p>
            <p>COMPANY</p>
            <p>VERDUGO GIFT</p>
            <p>2924 W Fairmount</p>
            <p>Ave</p>
            <p>Phoenix, AZ 85017</p>
          </div>
          <div class="li">
            <img src="../../assets/img/phoneicon.png" alt="">
            <p>1-888-992-6736</p>
            <p>Toll Free*</p>
          </div>
          <div class="li">
            <img src="../../assets/img/mailicon.png" alt="">
            <p>customerservice</p>
            <p>@verdugogifts.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-us-lower-text">
      <small>* If you purchased your product locally in Canada from Verdugo Gift Company please use the contact information located on your packing slip and order confirmation emails, you may also call our US customer service line and an associate will be able to direct you to the correct customer service center. If you purchased your product from Verdugo Gift Company in the US and had it shipped to Canada, please use our US contact information for questions regarding your order.</small>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.contact-us {
    h1 {
        @extend .h1-style;
    }
    .body {
        display: flex;
        width: 80%;
        margin: 0.5rem auto;
        .right-form {
            margin-left: 0.5rem;
            display: flex;
            flex-flow: column;
            .desc {
                color: #a5bff3;
                font-size: 20px;
                font-family: 'Unbuntu',sans-serif;
                font-weight: 300;
                font-style: italic;
            }
            input,
            textarea {
                border: 1px solid $gray-border;
                margin-top: 0.5rem;
                font-family: 'Ubuntu', sans-serif;
                font-size: 10px;
                color: #b6afa7;
                font-style: italic;
                font-weight: 400;
            }
            input {
                height: 0.6rem;
            }
            textarea {
                resize: none;
                width: 100%;
                box-sizing: border-box;
                padding-top: 10px;
            }
            .submit-btn {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin: 0.5rem 0.5rem 0 0;
                span {
                    font-size: 10px;
                    color: #7082b3;
                    margin-right: 0.5rem;
                }
                button {
                    width: 1.5rem;
                    height: 0.7rem;
                    background: #7082b3;
                    font-size: 14px;
                    color: #fff;
                    font-weight: 400;
                    // border: 0;
                }
            }
            .list {
                display: flex;
                margin-top: 0.5rem;
                justify-content: space-around;
                .li {
                    width: 30%;
                    text-align: center;
                    p {
                        width: 100%;
                        text-align: center;
                        margin-top: 0.1rem;
                        line-height: 14px;
                        font-family: 'Unbuntu',sans-serif;
                        font-weight: 300;
                        font-size: 9px;
                    }
                    p:nth-of-type(1) {
                        font-size: 11px;
                        color: #7082b3;
                        font-weight: 400;
                    }
                }
            }
        }
    }
    .contact-us-lower-text {
        width: 80%;
        margin: 1rem auto;
        color: #bbb5ae;
    }
}
</style>
