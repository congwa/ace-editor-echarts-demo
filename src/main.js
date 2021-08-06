import Vue from 'vue'
import App from './App.vue'
import Editor from 'bin-ace-editor';

require('brace/ext/emmet') // 如果是lang=html时需引入
require('brace/ext/language_tools') // language extension
require('brace/mode/json')
require('brace/snippets/json')
require('brace/theme/chrome')

import './style/style.css';
// import './rem.js';

import ResSplitPane from 'vue-resize-split-pane'

Vue.component('rs-panes', ResSplitPane)
Vue.component(Editor.name, Editor)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
