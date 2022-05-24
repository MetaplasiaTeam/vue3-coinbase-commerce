<script setup lang="ts">
import { MessageData } from './types'
import CoinbaseIframe from './coinbase-iframe.vue'
import { ref } from 'vue'

const showIframe = ref(false)

const props = defineProps({
  checkoutId: {
    type: String,
    default: '',
  },
  chargeId: {
    type: String,
    default: '',
  },
  disableCaching: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits<{
  (e: 'onChargeSuccess', data: MessageData): void
  (e: 'onChargeFailure', data: MessageData): void
  (e: 'onPaymentDetected', data: MessageData): void
  (e: 'onModalLoaded1', data: { checkoutId: string }): void
  (e: 'onModalLoaded2', data: { orderId: string }): void
  (e: 'onChargeCreated'): void
  (e: 'onModalClose'): void
  (e: 'onLoad'): void
}>()

function handleError(data: MessageData) {
  console.error(data)
  showIframe.value = false
}

function handleModalClose() {
  showIframe.value = false
  emit('onModalClose')
}

const handleChargeSuccess = (data: MessageData) => emit('onChargeSuccess', data)
const handleChargeFailure = (data: MessageData) => emit('onChargeFailure', data)
const handlePaymentDetected = (data: MessageData) =>
  emit('onPaymentDetected', data)
const handleLoad = () => emit('onLoad')
const handleModalLoaded1 = (data: { checkoutId: string }) =>
  emit('onModalLoaded1', data)
const handleModalLoaded2 = (data: { orderId: string }) =>
  emit('onModalLoaded2', data)
const handleChargeCreated = () => emit('onChargeCreated')
</script>

<template>
  <div>
    <a
      rel="external"
      title="Pay with Bitcoin, Bitcoin Cash, DAI, Litecoin, Dogecoin, Ethereum, or USD Coin"
      ><button id="coinbase-commerce-button" @click="showIframe = true">
        <slot></slot></button
    ></a>
    <CoinbaseIframe
      v-if="showIframe"
      :checkout-id="checkoutId"
      :charge-id="chargeId"
      :disable-caching="disableCaching"
      @on-charge-success="handleChargeSuccess"
      @on-modal-loaded1="handleModalLoaded1"
      @on-modal-loaded2="handleModalLoaded2"
      @on-charge-created="handleChargeCreated"
      @on-charge-failure="handleChargeFailure"
      @on-payment-detected="handlePaymentDetected"
      @on-error="handleError"
      @on-modal-close="handleModalClose"
      @on-load="handleLoad"
    />
  </div>
</template>

<style scoped lang="scss">
#coinbase-commerce-button {
  border-radius: 6px;
  background-color: #0667d0;
  background: linear-gradient(#0667d0, #0655ab);
  color: white;
  height: 40px;
  font-size: 14px;
  font-family: Avenir Next, sans-serif;
  font-weight: 500;
  user-select: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #0666d0;
  }
  &:active {
    background: #0655ab;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background: #7d95b6;
    color: rgba(0, 0, 0, 0.4);
    cursor: not-allowed;
  }
}
</style>
