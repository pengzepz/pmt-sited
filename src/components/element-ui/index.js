import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

import {Button, Select, Option, OptionGroup, Pagination, Collapse, CollapseItem, Autocomplete, Message
  // Form, FormItem, Tabs, Input
} from 'element-ui'
Vue.component(Button.name, Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Pagination)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Autocomplete)
Vue.prototype.$message = Message
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Tabs)
// Vue.use(Input)
