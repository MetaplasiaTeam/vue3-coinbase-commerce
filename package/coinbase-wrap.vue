<script setup lang="ts">
import { MessageData } from './types'
import CoinbaseIframe from './coinbase-iframe.vue'
import { useCoinbase } from './coinbase'

const { coinbaseOpen, chargeId, checkoutId } = useCoinbase()

const props = defineProps({
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
  coinbaseOpen.value = false
}

function handleModalClose() {
  coinbaseOpen.value = false
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
  <CoinbaseIframe
    v-if="coinbaseOpen"
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
  ></CoinbaseIframe>
</template>
