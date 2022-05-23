import { MessageData } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    checkoutId: {
        type: StringConstructor;
        default: string;
    };
    chargeId: {
        type: StringConstructor;
        default: string;
    };
    customMetadata: StringConstructor;
    disableCaching: BooleanConstructor;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        checkoutId: {
            type: StringConstructor;
            default: string;
        };
        chargeId: {
            type: StringConstructor;
            default: string;
        };
        customMetadata: StringConstructor;
        disableCaching: BooleanConstructor;
    }>> & {
        onOnChargeSuccess?: ((...args: any[]) => any) | undefined;
        onOnChargeFailure?: ((...args: any[]) => any) | undefined;
        onOnPaymentDetected?: ((...args: any[]) => any) | undefined;
        onOnModalClose?: ((...args: any[]) => any) | undefined;
        onOnLoad?: ((...args: any[]) => any) | undefined;
        onOnError?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: {
        (e: 'onChargeSuccess', data: MessageData): void;
        (e: 'onChargeFailure', data: MessageData): void;
        (e: 'onPaymentDetected', data: MessageData): void;
        (e: 'onError', data: MessageData): void;
        (e: 'onModalClose'): void;
        (e: 'onLoad'): void;
    };
    hostName: import("vue").Ref<string>;
    origin: string;
    uuid: string;
    src: import("vue").Ref<string>;
    loading: import("vue").Ref<boolean>;
    handleMessage: (msg: {
        origin: string;
        data: MessageData;
    }) => void;
    handleIFrameLoaded: () => void;
    buildSrc: (hostName: string) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onChargeSuccess" | "onChargeFailure" | "onPaymentDetected" | "onModalClose" | "onLoad" | "onError")[], "onChargeSuccess" | "onChargeFailure" | "onPaymentDetected" | "onModalClose" | "onLoad" | "onError", import("vue").ComponentProvideOptions, {
    props: {
        checkoutId: {
            type: StringConstructor;
            default: string;
        };
        chargeId: {
            type: StringConstructor;
            default: string;
        };
        customMetadata: StringConstructor;
        disableCaching: BooleanConstructor;
    };
    emits: ("onChargeSuccess" | "onChargeFailure" | "onPaymentDetected" | "onModalClose" | "onLoad" | "onError")[];
    setup(this: void, __props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        checkoutId: {
            type: StringConstructor;
            default: string;
        };
        chargeId: {
            type: StringConstructor;
            default: string;
        };
        customMetadata: StringConstructor;
        disableCaching: BooleanConstructor;
    }>> & {
        onOnChargeSuccess?: ((...args: any[]) => any) | undefined;
        onOnChargeFailure?: ((...args: any[]) => any) | undefined;
        onOnPaymentDetected?: ((...args: any[]) => any) | undefined;
        onOnModalClose?: ((...args: any[]) => any) | undefined;
        onOnLoad?: ((...args: any[]) => any) | undefined;
        onOnError?: ((...args: any[]) => any) | undefined;
    }>>, { expose, emit }: {
        emit: {
            (e: 'onChargeSuccess', data: MessageData): void;
            (e: 'onChargeFailure', data: MessageData): void;
            (e: 'onPaymentDetected', data: MessageData): void;
            (e: 'onError', data: MessageData): void;
            (e: 'onModalClose'): void;
            (e: 'onLoad'): void;
        };
        expose: any;
        slots: any;
        attrs: any;
    }): {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            checkoutId: {
                type: StringConstructor;
                default: string;
            };
            chargeId: {
                type: StringConstructor;
                default: string;
            };
            customMetadata: StringConstructor;
            disableCaching: BooleanConstructor;
        }>> & {
            onOnChargeSuccess?: ((...args: any[]) => any) | undefined;
            onOnChargeFailure?: ((...args: any[]) => any) | undefined;
            onOnPaymentDetected?: ((...args: any[]) => any) | undefined;
            onOnModalClose?: ((...args: any[]) => any) | undefined;
            onOnLoad?: ((...args: any[]) => any) | undefined;
            onOnError?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: {
            (e: 'onChargeSuccess', data: MessageData): void;
            (e: 'onChargeFailure', data: MessageData): void;
            (e: 'onPaymentDetected', data: MessageData): void;
            (e: 'onError', data: MessageData): void;
            (e: 'onModalClose'): void;
            (e: 'onLoad'): void;
        };
        hostName: import("vue").Ref<string>;
        origin: string;
        uuid: string;
        src: import("vue").Ref<string>;
        loading: import("vue").Ref<boolean>;
        handleMessage: (msg: {
            origin: string;
            data: MessageData;
        }) => void;
        handleIFrameLoaded: () => void;
        buildSrc: (hostName: string) => string;
    };
}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    checkoutId: {
        type: StringConstructor;
        default: string;
    };
    chargeId: {
        type: StringConstructor;
        default: string;
    };
    customMetadata: StringConstructor;
    disableCaching: BooleanConstructor;
}>> & {
    onOnChargeSuccess?: ((...args: any[]) => any) | undefined;
    onOnChargeFailure?: ((...args: any[]) => any) | undefined;
    onOnPaymentDetected?: ((...args: any[]) => any) | undefined;
    onOnModalClose?: ((...args: any[]) => any) | undefined;
    onOnLoad?: ((...args: any[]) => any) | undefined;
    onOnError?: ((...args: any[]) => any) | undefined;
}, {
    checkoutId: string;
    chargeId: string;
    disableCaching: boolean;
}>;
export default _sfc_main;
