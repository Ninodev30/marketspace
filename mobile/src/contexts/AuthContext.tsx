import { createContext, ReactNode, useState } from 'react';
import AdTypeProps from 'src/@types/ad';
import AdTradeTypeProps from 'src/@types/adTrade';
import PaymentMethodsTypes from 'src/@types/paymentMethods';

export type AuthContextDataProps = {
    user: any;
    filter: {
        isShowFilter: boolean;
        setIsShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
    };
    filterOptions: AdTradeTypeProps;
    adData: AdTypeProps;
    methods: {
        handleTrade: {
            condition: (select: boolean) => void;
            switch: () => void;
            payment: (paymentMethod: PaymentMethodsTypes) => void;
        };
        handleAdData: {
            handleTrade: {
                condition: (select: boolean) => void;
                switch: () => void;
                payment: (paymentMethod: PaymentMethodsTypes) => void;
            };
        };
    };
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState('test');
    const [isShowFilter, setIsShowFilter] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<AdTradeTypeProps>({
        used: false,
        switch: false,
        payment: {
            bankSlip: false,
            pix: false,
            money: false,
            creditCard: false,
            bankDeposit: false
        }
    });
    const [adData, setAdData] = useState<AdTypeProps>({
        ad: {
            used: false,
            switch: false,
            payment: {
                bankSlip: false,
                pix: false,
                money: false,
                creditCard: false,
                bankDeposit: false
            }
        },
        title: '',
        description: '',
        price: 10,
        adPhotos: [''],
        user: {
            name: '',
            photo: ''
        }
    });

    const methods = {
        handleTrade: {
            condition: (select: boolean) => setFilterOptions(prevState => ({
                ...prevState,
                used: select
            })),
            switch: () => setFilterOptions(prevState => ({
                ...prevState,
                switch: !prevState.switch
            })),
            payment: (paymentMethod: PaymentMethodsTypes) => setFilterOptions(prevState => ({
                ...prevState,
                payment: {
                    ...prevState.payment,
                    [paymentMethod]: !prevState.payment[paymentMethod]
                }
            }))
        },
        handleAdData: {
            handleTrade: {
                condition: (select: boolean) => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        used: select
                    }
                })),
                switch: () => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        switch: !prevState.ad.switch
                    }
                })),
                payment: (paymentMethod: PaymentMethodsTypes) => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        payment: {
                            ...prevState.ad.payment,
                            [paymentMethod]: !prevState.ad.payment[paymentMethod]
                        }
                    }
                }))
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                filter: {
                    isShowFilter,
                    setIsShowFilter
                },
                adData,
                filterOptions,
                methods
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;