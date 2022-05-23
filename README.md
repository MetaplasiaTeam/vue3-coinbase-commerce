# Coinbase Commerce Vue3 Button

**English** | [简体中文](./README.zh-CN.md)

A button to embed a Coinbase Commerce checkout or charge directly into your Vue3 application.

## Install

```shell
yarn add vue3-coinbase-commerce

# or npm

npm install --save vue3-coinbase-commerce
```

## Usage

In Vue Single-File Components (SFC):

```html
<script setup lang="ts">
  // import
  import { CoinbaseCommerceButton } from 'vue3-coinbase-commerce'
</script>

<template><div>
    <CoinbaseCommerceButton>Buy</CoinbaseCommerceButton>
</div></template>

<style scoped></style>
```

## Getting Started

1. To start accepting digital currency payments, first register for a Coinbase Commerce
account [here](https://commerce.coinbase.com).
2. Whitelist your domain in Settings.
3. Follow the API Documentation [here](https://commerce.coinbase.com/docs/api/) to create a charge or checkout.
    - Alternatively, create a checkout from the merchant dashboard and copy the ID found in the checkout's details.
4. Pass the ID of the charge or checkout you create to the `CoinbaseCommerceButton` component
5. That's it! You're ready to start accepting digital currency payments with Coinbase Commerce

## Props

In addition to the regular `button` props, this component accepts some custom props:

| Prop Name        | default | required              | type      |
| ---------------- | ------- | --------------------- | --------- |
| `checkoutId`     | nil     | If no chargeId, yes   | `string`  |
| `chargeId`       | nil     | If no checkoutId, yes | `string`  |
| `disableCaching` | true    | no                    | `boolean` |

**Warning**: If `disableCaching` is set to `true`, users that accidentally close their payment windows will be unable to see their transaction's status upon reopening.

## Emits

| Emit Name           | default | required | type                           |
| ------------------- | ------- | -------- | ------------------------------ |
| `onLoad`            | undefined     | no       | `() => void`                   |
| `onModalLoaded1`    | undefined     | no       | `() => { checkoutId: string }` |
| `onModalLoaded2`    | undefined     | no       | `() => { orderId: string }`    |
| `onChargeCreated`   | undefined     | no       | `() => void`                   |
| `onChargeSuccess`   | undefined     | no       | `(MessageData) => void`        |
| `onChargeFailure`   | undefined     | no       | `(MessageData) => void`        |
| `onPaymentDetected` | undefined     | no       | `(MessageData) => void`        |
| `onModalClosed`     | undefined     | no       | `()=>void`                     |

`MessageData` like this:

```typescript
export type MessageData = {
  event:
    | 'charge:created'
    | 'charge:failed'
    | 'charge_confirmed'
    | 'charge_failed'
    | 'payment_detected'
    | 'error_not_found'
    | 'checkout_modal_closed'
    | 'checkout_modal_loaded'
    | 'charge_created'
  charge: Charge
}
```

For more please click [here](package/types.ts)

**Info**: Perhaps you noticed that there are two parts, `onModalLoaded1` and `onModalLoaded2`, but what is the difference between these two parts? Simply put, if you pass in the `checkoutId` parameter, this part of the callback process of `onModalLoaded1` -> `onChargeCreated` ->  `onModalLoaded2`, if you pass in the `chargeId` parameter, it will directly call back `onModalLoaded2`. This can be used when the checkout to get the corresponding charge that is order.

## License

MIT License.
