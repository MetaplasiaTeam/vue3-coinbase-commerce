declare type OrderCode = string;
declare type Network = 'bitcoin' | 'bitcoincash' | 'ethereum' | 'litecoin' | 'dogecoin';
declare type PricingType = 'fixed_price' | 'no_price';
declare type PaymentStatus = 'NEW' | 'PENDING' | 'CONFIRMED' | 'FAILED';
declare type FiatCurrency = string;
declare type CryptoCurrency = string;
declare type CryptoMoney = {
    amount: string;
    currency: CryptoCurrency;
};
declare type FiatMoney = {
    amount: string;
    currency: FiatCurrency;
};
declare type ChargePricing = {
    local: FiatMoney;
    bitcoin: CryptoMoney | null;
    bitcoincash: CryptoMoney | null;
    ethereum: CryptoMoney | null;
    litecoin: CryptoMoney | null;
    dogecoin: CryptoMoney | null;
};
export declare type Payment = {
    network: Network;
    transactionId: string;
    status: PaymentStatus;
    value: {
        crypto: CryptoMoney;
        local: FiatMoney;
    };
    block: {
        height?: number;
        hash?: string;
        confirmations: number;
        confirmationsRequired: number;
    };
};
declare type ChargeState = {
    status: any;
    context: any;
    time: string;
    payment?: {
        network: Network;
        transactionId: string;
    };
};
export declare type Charge = {
    code: OrderCode;
    createdAt: string;
    confirmedAt?: string;
    expiresAt: string;
    addresses: {
        Network: string;
    };
    pricingType: PricingType;
    pricing?: ChargePricing;
    payments: Array<Payment>;
    timeline: Array<ChargeState>;
    name?: string;
    description?: string;
    logoUrl?: string;
    checkout?: {
        id: string;
    };
    redirectUrl?: string;
    thirdPartyProvider?: string;
};
export declare type MessageData = {
    event: 'charge:created' | 'charge:failed' | 'charge_confirmed' | 'charge_failed' | 'payment_detected' | 'error_not_found' | 'checkout_modal_closed';
    charge: Charge;
};
export declare type SrcParams = {
    origin: string;
    version: string;
    buttonId: string;
    custom?: string;
    cacheDisabled: boolean;
};
export {};
