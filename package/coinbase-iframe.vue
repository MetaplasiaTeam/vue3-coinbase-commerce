<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { MessageData, SrcParams } from './types'
import { util } from './utils'

const props = defineProps({
  checkoutId: {
    type: String,
    default: '',
  },
  chargeId: {
    type: String,
    default: '',
  },
  customMetadata: String,
  disableCaching: Boolean,
})

const emit = defineEmits<{
  (e: 'onChargeSuccess', data: MessageData): void
  (e: 'onChargeFailure', data: MessageData): void
  (e: 'onPaymentDetected', data: MessageData): void
  (e: 'onModalLoaded1', data: { checkoutId: string }): void
  (e: 'onModalLoaded2', data: { orderId: string }): void
  (e: 'onChargeCreated'): void
  (e: 'onError', data: MessageData): void
  (e: 'onModalClose'): void
  (e: 'onLoad'): void
}>()
const hostName = ref('')
const origin = 'https://commerce.coinbase.com'
const uuid = util.generateUUID()
const src = ref('')
const loading = ref(true)

onMounted(() => {
  window.addEventListener('message', handleMessage)
  hostName.value = `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? ':' + window.location.port : ''
  }/`
  src.value = buildSrc(hostName.value)
  console.log(src.value)
})

onUnmounted(() => {
  window.removeEventListener('message', handleMessage)
})

function handleMessage(msg: { origin: string; data: MessageData }) {
  console.log(msg.data)
  switch (msg.data.event) {
    case 'charge_confirmed':
      emit('onChargeSuccess', msg.data)
      break
    case 'charge_failed':
      emit('onChargeFailure', msg.data)
      break
    case 'payment_detected':
      emit('onPaymentDetected', msg.data)
      break
    case 'error_not_found':
      emit('onError', msg.data)
      break
    case 'checkout_modal_closed':
      emit('onModalClose')
    case 'checkout_modal_loaded':
      if ((msg.data as any).checkout !== undefined) {
        emit('onModalLoaded1', { checkoutId: (msg.data as any).checkout })
      } else {
        emit('onModalLoaded2', { orderId: (msg.data as any).orderCode })
      }
      break
    case 'charge_created':
      emit('onChargeCreated')
    default:
      break
  }
}

function handleIFrameLoaded() {
  emit('onLoad')
  loading.value = false
}

function buildSrc(hostName: string) {
  const params: SrcParams = {
    origin: hostName,
    version: '0.0.1',
    buttonId: uuid,
    cacheDisabled: props.disableCaching,
  }

  function encodeURIParams(params: any) {
    const encoded = []
    const quote = window.encodeURIComponent
    for (const k in params) {
      if (params.hasOwnProperty(k)) {
        encoded.push(`${quote(k)}=${quote(params[k])}`)
      }
    }
    return encoded.join('&')
  }

  let type = ''
  let id = ''
  if (props.checkoutId !== '') {
    id = props.checkoutId
    type = 'checkout'
  } else if (props.chargeId !== '') {
    id = props.chargeId
    type = 'charge'
  } else {
    throw new Error('must supply either checkoutId or chargeId prop')
  }

  return `${origin}/embed/${type}/${encodeURI(id)}?${encodeURIParams(params)}`
}
</script>

<template>
  <div id="iframe-container">
    <iframe :onload="handleIFrameLoaded" :src="src" />
  </div>
</template>

<style scoped lang="scss">
#iframe-container {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99998;

  background-color: rgba(0, 0, 0, 0.5);
}

iframe {
  width: 100%;
  max-width: 600px;
  height: 100%;
  position: fixed;
  z-index: 999;
  right: 0;
  top: 0;
  bottom: 0;
  border: none;
}
</style>
