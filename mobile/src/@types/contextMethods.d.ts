type ContextMethodsTypeProps = {
    handleFilter: {
        condition: (select: boolean) => void;
        switch: () => void;
        payment: (paymentMethod: PaymentMethodsTypes) => void;
    };
    handleAdData: {
        trade: {
            condition: (select: boolean) => void;
            switch: () => void;
            payment: (paymentMethod: PaymentMethodsTypes) => void;
        };
        photo: {
            add: () => void;
            remove: (photo: number) => void;
        };
    };
};

export default ContextMethodsTypeProps;