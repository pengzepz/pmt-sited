// import {ADD_SHOPPING_CART, CAT_BILL_DETAILS, TRANSFORM_BILL_DETAILS_ITEMS} from './mutation-types.js'
import {CHANGENAVLISTHOVERNUM} from './mutation-types.js'
export default {
  //  [] (state,{}) {
  //
  // }
  [CHANGENAVLISTHOVERNUM](state, num) {
    state.navHoverNum = num;
  }

}
