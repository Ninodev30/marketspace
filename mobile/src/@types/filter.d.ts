type FilterDataTypeProps = {
    used: boolean;
    exchange: boolean;
    payment: {
        ticket: boolean;
        pix: boolean;
        money: boolean;
        creditCard: boolean;
        bankDeposit: boolean;
    };
};

export default FilterDataTypeProps;