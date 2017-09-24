import {CHANGENAVLISTHOVERNUM, COMMODITYDETAILS} from './mutation-types.js'
export default {
  [CHANGENAVLISTHOVERNUM](state, num) {
    state.navHoverNum = num;
  },
  [COMMODITYDETAILS](state, obj) {
    state.commodityDetails = obj;
  }

}
