
import Vue from 'vue'
import Dialogs from '../components/Dialogs'
import dialogs from '../scripts/dialogs'

Vue.component('Dialogs', Dialogs)

export default function ({ app, store }) {
  Vue.prototype.$dialogs = {
    show (opts) {
      store.commit('dialogs/show', opts)
    },
    hide (opts) {
      store.commit('dialog/hide', opts)
    }
  }
  store.registerModule('dialogs', dialogs)
}
