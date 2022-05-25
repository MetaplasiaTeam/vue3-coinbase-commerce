# Coinbase Commerce Vue3 Button

**简体中文** | [English](./README.md)

一个可以将 Coinbase Commerce 的收费或结账嵌入到你的 Vue3 应用程序中的按钮。

## 安装

```shell
yarn add vue3-coinbase-commerce

# 或者使用 npm

npm install --save vue3-coinbase-commerce
```

## 使用

在 Vue 单文件组件 (SFC) 中：

```html
<script setup lang="ts">
  // 导入
  import { CoinbaseCommerceButton } from 'vue3-coinbase-commerce'
</script>

<template><div>
    <CoinbaseCommerceButton>Buy</CoinbaseCommerceButton>
</div></template>

<style scoped></style>
```

如果你想从某处动态获取一个 `checkoutId` 来使用的话，请查看 [这里](#coinbase-wrap)

## 开始

1. 先在 [这里](https://commerce.coinbase.com) 注册一个 Coinbase Commerce 账户。
2. 将你的域名添加到白名单设置。
3. 按照 API [文档](https://commerce.coinbase.com/docs/api/) 创建收费或结账。
    - 可以从商家后台创建结账并复制结账的详细信息中的 ID。
4. 传递创建的收费或结账的 ID 到 `CoinbaseCommerceButton` 组件。
5. 这样就完成了！你可以开始接受以 Coinbase Commerce 为支付渠道的虚拟货币了。

## 参数

除了常规的 `button` 参数外，这个组件接受一些自定义的参数：

| 参数名称         | 默认值    | 必需                        | 类型      |
| ---------------- | --------- | --------------------------- | --------- |
| `checkoutId`     | undefined | 如果没有 chargeId，则必须   | `string`  |
| `chargeId`       | undefined | 如果没有 checkoutId，则必须 | `string`  |
| `disableCaching` | true      | 不需要                      | `boolean` |

**警告**: 如果 `disableCaching` 设置为 `true`，用户在意外关闭他们的支付窗口时将无法再次看到他们的先前交易状态。

## 可触发事件

| 事件名称            | 默认值    | 必需   | 类型                           |
| ------------------- | --------- | ------ | ------------------------------ |
| `onLoad`            | undefined | 不需要 | `() => void`                   |
| `onModalLoaded1`    | undefined | 不需要 | `() => { checkoutId: string }` |
| `onModalLoaded2`    | undefined | 不需要 | `() => { orderId: string }`    |
| `onChargeCreated`   | undefined | 不需要 | `() => void`                   |
| `onChargeSuccess`   | undefined | 不需要 | `(MessageData) => void`        |
| `onChargeFailure`   | undefined | 不需要 | `(MessageData) => void`        |
| `onPaymentDetected` | undefined | 不需要 | `(MessageData) => void`        |
| `onModalClosed`     | undefined | 不需要 | `()=>void`                     |

`MessageData` 就像这样：

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

更多信息可以点 [这里](package/types.ts) 查看

**一些信息**: 也许你注意到了有 `onModalLoaded1` 和 `onModalLoaded2` 这两个部分，那么这两个部分有什么区别呢？简单地说，如果你传入了 `checkoutId`  这个参数的话，这部分的回调流程的 `onModalLoaded1` -> `onChargeCreated` ->  `onModalLoaded2`，如果你传入了 `chargeId` 这个参数的话，则会直接回调 `onModalLoaded2` checkout 的时候得到对应的 charge 也就是 order。

## Coinbase Wrap

这个组件可以让你动态的使用 checkoutid，他由两部分组成，分别是 `CoinbaseWrap` 组件和 `useCoinbase` 函数。

在 App.vue 或者你需要的地方引入组件。

```html
<script setup lang="ts">
  // 导入
  import { CoinbaseWrap } from 'vue3-coinbase-commerce'
</script>

<template><div>
    <CoinbaseWrap/>
</div></template>

<style scoped></style>
```

然后使用 `useCoinbase` 函数，动态的控制页面显示。

```html
<script setup lang="ts">
  // 导入
  import { CoinbaseWrap, useCoinbase } from 'vue3-coinbase-commerce'

  const { openWithCheckoutId } = useCoinbase()
  // 从某处得到
  const checkoutId = someFunction()
  openWithCheckoutId(checkoutId)
</script>
```

后续操作和使用按钮是一致的，包括可触发事件。

## License

MIT License.
