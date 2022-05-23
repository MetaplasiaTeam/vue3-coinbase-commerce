import CoinbaseCommerceButton from './coinbase-commerce-button.vue'
const components = [CoinbaseCommerceButton]

CoinbaseCommerceButton.install = function (Vue: any) {
  Vue.component(CoinbaseCommerceButton.name, CoinbaseCommerceButton)
}

const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.component('CoinbaseCommerceButton', component)
  })
}

export { CoinbaseCommerceButton }

export default { install }
