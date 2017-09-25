import {CHANGENAVLISTHOVERNUM, COMMODITYDETAILS, CHANGEMASKSRATUS} from './mutation-types.js'
export default {
  [CHANGENAVLISTHOVERNUM](state, num) {
    state.navHoverNum = num;
  },
  [COMMODITYDETAILS](state, obj) {
    state.commodityDetails = obj;
  },
  [CHANGEMASKSRATUS](state, boo) {
    state.maskStatus = boo;
  }

}
