import AdTradePaymentTypeProps from "./adTradePayment";

type AdTradeTypeProps = {
    used: boolean;
    exchange: boolean;
    payment: AdTradePaymentTypeProps;
};

export default AdTradeTypeProps;