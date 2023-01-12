export type PaymentDataTypeProps = {
    ticket: boolean;
    pix: boolean;
    money: boolean;
    creditCard: boolean;
    bankDeposit: boolean;
};

type AdDataTypeProps = {
    used: boolean;
    exchange: boolean;
    payment: PaymentDataTypeProps;
};

export default AdDataTypeProps;