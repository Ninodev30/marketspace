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
            add: (photo: string, photoNumber: number) => void;
            remove: (photoNumber: number) => void;
        };
    };
};

export default ContextMethodsTypeProps;