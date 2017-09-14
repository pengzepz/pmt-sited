import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

import {Button, Select, Option, OptionGroup, Pagination} from 'element-ui'
// Vue.component(Button.name, Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Pagination)
