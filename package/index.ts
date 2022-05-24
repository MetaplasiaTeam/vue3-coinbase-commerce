import CoinbaseCommerceButton from './coinbase-commerce-button.vue'
import CoinbaseWrap from './coinbase-wrap.vue'
import { useCoinbase } from './coinbase'

const components = [CoinbaseCommerceButton, CoinbaseWrap]

CoinbaseCommerceButton.install = function (Vue: any) {
  Vue.component(CoinbaseCommerceButton.name, CoinbaseCommerceButton)
}

const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.component('CoinbaseCommerceButton', component)
  })
}

export { CoinbaseCommerceButton, CoinbaseWrap, useCoinbase }

export default { install }
