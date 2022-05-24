import { ref } from 'vue'

const coinbaseOpen = ref(false)
const checkoutId = ref('')
const chargeId = ref('')

export function useCoinbase() {
  const openWithCheckoutId = (_checkoutId: string) => {
    coinbaseOpen.value = true
    checkoutId.value = _checkoutId
  }
  const openWithChargeId = (_chargeId: string) => {
    coinbaseOpen.value = true
    chargeId.value = _chargeId
  }

  return {
    coinbaseOpen,
    checkoutId,
    chargeId,
    openWithCheckoutId,
    openWithChargeId,
  }
}
