<template lang="html">
  <div class="shipping">
    <h1>Shipping</h1>
    <p class='desc'>Verdugo Gift Company is committed to your satisfaction!</p>
    <div class="body">
      <div class="p1">
        <p class='title'><i class='iconfont icon-icon2'></i>International Orders</p>
        <div class="mid">
                  <p class='content'>Verdugo Gift Company has partnered with a trusted third-party company, International Checkout, to fulfill orders for our International customers. Simply put the items you wish to purchase in our Shopping Cart and choose the "International Checkout" option. Your items will be transferred to International Checkout for processing. You may pay by International credit card, PayPal or bank transfer. International Checkout will process your order, including billing, shipping and customer service</p>
                  <img src="../../assets/img/int-shipping-logo.jpg" alt="">
        </div>

        <p class='content c2'>Once your order is completed, all inquiries should be directed to International Checkout at support@internationalcheckout.com.</p>
      </div>
      <div class="p2">
        <p class='title'><i class='iconfont icon-icon2'></i>Which countries do you ship to?</p>
        <div class="mid">
                  <p class='content'>International shipping is currently available WORLDWIDE from Verdugo Gift Company. Our third party vendor, International Checkout, will ship to all destinations around the world including APO / FPO addresses.</p>
                  <img src="../../assets/img/worldwide-shipping.jpg" alt="">
        </div>
      </div>
      <div class="p3">
        <p class='title'><i class='iconfont icon-icon2'></i>Can I check the status of my international order?</p>
        <div class="mid">
                  <p class='content'>To check the status of your order or track your package, please login to your International Checkout account.</p>
        </div>
      </div>
      <div class="p4">
        <p class='title'><i class='iconfont icon-icon2'></i>Who should I contact with questions about my international order?</p>
        <p class='content'>All inquiries regarding your international order should be directed to: </p>
        <div class="mid">
          <img src="../../assets/img/shipping-envelope.jpg" alt="">
          <p class='content'>International Checkout.<br /><a href='mailto:1430860336@qq.com'>1430860336@qq.com</a></p>
        </div>
        <p class='content c2'>Please visit the International Checkout Customer Service page for more information and phone numbers in your area.</p>
      </div>

      <div class="p5">
        <p class='title'><i class='iconfont icon-icon2'></i>Domestic Orders</p>
        <div class="mid">
          <div class="p5-m-c">
            <p class='content'>All orders typically ship from our fulfillment centers within 48hrs from the time that the order was placed(Monday-Friday), unless otherwise noted in the product detail page. Orders ship from AZ, CA, TN, PA, KY, or SC depending on your location and product availability. From time to time we may list items that ship directly from our supplier in which case your order may ship from various warehouses throughout the United States. All orders should arrive within 4-14 business days from the date shipped. Orders may ship via UPS, USPS, or FEDEX depending on the weight of your order and on your location. </p>
            <p class='content'>It is our policy to inform our customers via email once their order has shipped, our shipment confirmation email will contain your tracking number and the shipping method used to ship your product.</p>
            <p class='content'>It is our policy to inform our customers of shipment delays caused by us (Verdugo Gift Company) via email. Although Verdugo Gift Company makes every effort to ship every order expeditiously, there are times when a shipping carrier may delay delivery of your order for reasons that are beyond our control. Please note that Verdugo Gift Company is not responsible for delays caused by a shipping carrier. </p>
            <p class='content'>Every effort is made to keep our inventory at maximum levels of service. However, unavoidable shortages may occur as the result of unanticipated demand and during special Factory sales. Out-of-stock items are usually updated automatically by our inventory system; unfortunately, occasionally our system will not accurately represent a products stock status. Orders that come through for out of stock items will be cancelled. WE DO NOT BACKORDER ITEMS. If your order is cancelled, you will be notified by phone or email.</p>
            <p class='comment'>Please note: Once an order has been processed and you have received an email confirmation of your order from Verdugo Gift Company, your order cannot be cancelled.</p>
          </div>
            <img src="../../assets/img/ship-locations-map.jpg" alt="">
        </div>
      </div>

      <div class="p6">
        <p class='title'><i class='iconfont icon-icon2'></i>Shipping Rates</p>
        <div class="mid">
          <div class="">
            <p class='content'>Verdugo Gift Company offers Flat Rate Shipping. All orders ship via ground service and should arrive within 3-7 business days from the date shipped. </p>
            <p class='content'>Still have questions about our shipping policy? Send us an email, shippingpolicy@verdugogifts.com. </p>
            <p class='content'>Please allow up to 24 hours for a response.</p>
          </div>
          <div class="">
            <table>
              <tbody>
                <tr>
                  <th>Order Value</th>
                  <th>Shipping Cost</th>
                </tr>
                <tr>
                  <td>$1.00 - $49.00</td>
                  <td>$8.85</td>
                </tr>
                <tr>
                  <td>$50.00 - $99.99</td>
                  <td>$10.85</td>
                </tr>
                <tr>
                  <td>$100.00 and up</td>
                  <td>$17.85</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.shipping {
    h1 {
        @extend .h1-style;
    }
    .desc {
        @extend .desc-style;
    }
    .body {
        width: 80%;
        margin: 1rem auto;
        .title {
            font-size: 20px;
            color: #7082b3;
            font-style: italic;
            margin-bottom: 0.3rem;
            display: flex;
            align-items: center;
        }
        .mid {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .content {
            width: 70%;
            padding-left: 0.5rem;
            color: #323433;
            font-size: 11px;
            font-family: Ubuntu, sans-serif;
            font-size: 11.1px;
        }
        .p1,
        .p2,
        .p3,
        .p4,
        .p5,
        .p6 {
            margin-bottom: 1rem;
        }
        .p1 {
            .c2 {
                margin-top: 0.5rem;
            }
        }
        .p4 {
            .mid {
                display: flex;
                justify-content: flex-start;
                margin: 0.5rem 0 0 0.5rem;
            }
            .c2 {
                margin-top: 0.5rem;
            }
        }
        .p5 {
            .p5-m-c {
                .content {
                    width: 90%;
                    margin-top: 0.3rem;
                }
                .comment {
                    background: #e3e3e3;
                    padding: 10px;
                    margin-top: 0.3rem;
                    font-size: 13px;
                }
            }
        }
        .p6 {
            .mid {
                .content {
                    width: 90%;
                }
            }
            table {
                border: 1px solid #e7e4d3;
                border-spacing: 0;
                tbody {
                    display: table-row-group;
                    vertical-align: middle;
                    border-color: inherit;
                    th {
                        width: 7rem;
                        height: 0.5rem;
                        text-align: center;
                        font-size: 8px;
                        color: #fff;
                        border-bottom: 1px solid #e7e4d3;
                        font-weight: 400;
                        text-transform: uppercase;
                        background-color: #7082b2;
                    }
                    td {
                        width: 7rem;
                        height: 0.5rem;
                        text-align: center;
                        letter-spacing: 1px;
                    }
                }
            }
        }
    }
}
</style>
