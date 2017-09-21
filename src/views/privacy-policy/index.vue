<template lang="html">
  <div class="privacy-policy">
    <h1>Privacy Policy</h1>
    <div class="body-content">
      <div class="panel p1">
        <p class='question'>What information do we collect?</p>
        <div class='answer'>
          <answer-box :items='answers[0]'></answer-box>
        </div>
      </div>
      <div class="panel p2">
        <p class='question'>How do we use your information?</p>
        <p class='desc'>
We may use the information we collect from you when you register, purchase products, enter a contest or promotion, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
        <div class='answer'>
          <answer-box :items='answers[1]'></answer-box>
        </div>
      </div>
      <div class="panel p3">
        <p class='question'>How do we protect visitor information?</p>
        <p class='desc'>
          We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. When you place orders or access your personal information, we offer the use of a secure server. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our databases to be only accessed as stated above.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import answerBox from '@/components/privacy-answers-box';
export default {
  data() {
    return {
      answers: [
        [
          'We collect information from you when you register on the site, place an order, enter a contest or sweepstakes, respond to a survey or communication such as e-mail, or participate in another site feature.',
          'When ordering or registering, we may ask you for your name, e-mail address, mailing address, phone number, credit card information or other information. You may, however, visit our site anonymously.',
          'We also collect information about gift recipients so that we can fulfill the gift purchase. The information we collect about gift recipients is not used for marketing purposes.',
          `Like many websites, we use 'cookies' to enhance your experience and gather information about visitors and visits to our websites. Please refer to the
          Do we use 'cookies ' ? section below
          for information about cookies and how we use them.
          `
        ],
        [
          `To personalize your site experience and to allow us to deliver the type of content and product offerings in which you are most interested.`,
          `To allow us to better service you in responding to your customer service requests.`,
          `To quickly process your transactions.`,
          `To administer a contest, promotion, survey or other site feature.`,
          `If you have opted-in to receive our e-mail newsletter, we may send you periodic e-mails. If you would no longer like to receive promotional e-mail from us, please refer to the "How can you opt-out, remove or modify information you have provided to us?" section below. If you have not opted-in to receive e-mail newsletters, you will not receive these e-mails. Visitors who register or participate in other site features such as marketing programs and 'members-only' content will be given a choice whether they would like to be on our e-mail list and receive e-mail communications from us.`
        ]
      ]
    }
  },
  components: {
    'answer-box': answerBox
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.privacy-policy {
    h1 {
        @extend .h1-style;
    }
    .body-content {
        // border: 1px solid red;
        width: 80%;
        margin: 18px auto;
        .panel {
            margin-top: 37px;
            padding: 18px 0 0 18px;
        }
        .question {
            color: #7082b3;
            font-style: italic;
            font-weight: 800;
            font-size: 18px;
        }
        .p2,
        .p3 {
            .desc {
                color: #000;
                font-size: 12px;
                padding-left: 8px;
            }
        }
        .p3 {
            .desc {
                margin-top: 18px;
            }
        }
    }
}
</style>
