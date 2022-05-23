import { defineComponent, ref, onMounted, onUnmounted, openBlock, createElementBlock, createElementVNode, renderSlot, createBlock, createCommentVNode } from "vue";
const util = {
  generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
};
var coinbaseIframe_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { id: "iframe-container" };
const _hoisted_2 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "coinbase-iframe",
  props: {
    checkoutId: {
      type: String,
      default: ""
    },
    chargeId: {
      type: String,
      default: ""
    },
    customMetadata: String,
    disableCaching: Boolean
  },
  emits: ["onChargeSuccess", "onChargeFailure", "onPaymentDetected", "onError", "onModalClose", "onLoad"],
  setup(__props, { emit }) {
    const props = __props;
    const hostName = ref("");
    const origin = "https://commerce.coinbase.com";
    const uuid = util.generateUUID();
    const src = ref("");
    const loading = ref(true);
    onMounted(() => {
      window.addEventListener("message", handleMessage);
      hostName.value = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ":" + window.location.port : ""}/`;
      src.value = buildSrc(hostName.value);
      console.log(src.value);
    });
    onUnmounted(() => {
      window.removeEventListener("message", handleMessage);
    });
    function handleMessage(msg) {
      console.log(msg.data);
      switch (msg.data.event) {
        case "charge_confirmed":
          emit("onChargeSuccess", msg.data);
          break;
        case "charge_failed":
          emit("onChargeFailure", msg.data);
          break;
        case "payment_detected":
          emit("onPaymentDetected", msg.data);
          break;
        case "error_not_found":
          emit("onError", msg.data);
          break;
        case "checkout_modal_closed":
          emit("onModalClose");
      }
    }
    function handleIFrameLoaded() {
      emit("onLoad");
      loading.value = false;
    }
    function buildSrc(hostName2) {
      const params = {
        origin: hostName2,
        version: "0.0.1",
        buttonId: uuid,
        cacheDisabled: props.disableCaching
      };
      function encodeURIParams(params2) {
        const encoded = [];
        const quote = window.encodeURIComponent;
        for (const k in params2) {
          if (params2.hasOwnProperty(k)) {
            encoded.push(`${quote(k)}=${quote(params2[k])}`);
          }
        }
        return encoded.join("&");
      }
      let type = "";
      let id = "";
      if (props.checkoutId !== "") {
        id = props.checkoutId;
        type = "checkout";
      } else if (props.chargeId !== "") {
        id = props.chargeId;
        type = "charge";
      } else {
        throw new Error("must supply either checkoutId or chargeId prop");
      }
      return `${origin}/embed/${type}/${encodeURI(id)}?${encodeURIParams(params)}`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("iframe", {
          onload: handleIFrameLoaded,
          src: src.value
        }, null, 8, _hoisted_2)
      ]);
    };
  }
});
var CoinbaseIframe = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-76b732d8"]]);
var coinbaseCommerceButton_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = {
  rel: "external",
  title: "Pay with Bitcoin, Bitcoin Cash, DAI, Litecoin, Dogecoin, Ethereum, or USD Coin"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "coinbase-commerce-button",
  props: {
    checkoutId: {
      type: String,
      default: ""
    },
    chargeId: {
      type: String,
      default: ""
    },
    disableCaching: {
      type: Boolean,
      default: true
    }
  },
  emits: ["onChargeSuccess", "onChargeFailure", "onPaymentDetected", "onModalClose", "onLoad"],
  setup(__props, { emit }) {
    const showIframe = ref(false);
    function handleError(data) {
      console.error(data);
      showIframe.value = false;
    }
    function handleModalClose() {
      showIframe.value = false;
      emit("onModalClose");
    }
    const handleChargeSuccess = (data) => emit("onChargeSuccess", data);
    const handleChargeFailure = (data) => emit("onChargeFailure", data);
    const handlePaymentDetected = (data) => emit("onPaymentDetected", data);
    const handleLoad = () => emit("onLoad");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("a", _hoisted_1, [
          createElementVNode("button", {
            id: "coinbase-commerce-button",
            onClick: _cache[0] || (_cache[0] = ($event) => showIframe.value = true)
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ]),
        showIframe.value ? (openBlock(), createBlock(CoinbaseIframe, {
          key: 0,
          "checkout-id": __props.checkoutId,
          "disable-caching": __props.disableCaching,
          onOnChargeSuccess: handleChargeSuccess,
          onOnChargeFailure: handleChargeFailure,
          onOnPaymentDetected: handlePaymentDetected,
          onOnError: handleError,
          onOnModalClose: handleModalClose,
          onOnLoad: handleLoad
        }, null, 8, ["checkout-id", "disable-caching"])) : createCommentVNode("", true)
      ]);
    };
  }
});
var CoinbaseCommerceButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8a5c188"]]);
const components = [CoinbaseCommerceButton];
CoinbaseCommerceButton.install = function(Vue) {
  Vue.component(CoinbaseCommerceButton.name, CoinbaseCommerceButton);
};
const install = function(Vue) {
  components.forEach((component) => {
    Vue.component("CoinbaseCommerceButton", component);
  });
};
var index = { install };
export { CoinbaseCommerceButton, index as default };
