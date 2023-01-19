import { createContext, ReactNode, useState } from 'react';
import AdTypeProps from 'src/@types/ad';
import AdTradeTypeProps from 'src/@types/adTrade';
import PaymentMethodsTypes from 'src/@types/paymentMethods';

export type AuthContextDataProps = {
    user: any;
    adData: AdTypeProps;
    filterOptions: AdTradeTypeProps;
    methods: {
        handleTrade: {
            condition: (select: boolean) => void;
            exchange: () => void;
            payment: (paymentMethod: PaymentMethodsTypes) => void;
        };
        handleAdData: {
            handleTrade: {
                condition: (select: boolean) => void;
                exchange: () => void;
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
    const [filterOptions, setFilterOptions] = useState<AdTradeTypeProps>({
        used: false,
        exchange: false,
        payment: {
            ticket: false,
            pix: false,
            money: false,
            creditCard: false,
            bankDeposit: false
        }
    });
    const [adData, setAdData] = useState<AdTypeProps>({
        ad: {
            used: false,
            exchange: false,
            payment: {
                ticket: false,
                pix: false,
                money: false,
                creditCard: false,
                bankDeposit: false
            }
        },
        title: 't',
        description: 't',
        price: 10,
        adPhotos: ['t', 't'],
        user: {
            name: 't',
            photo: 't'
        }
    } as AdTypeProps);

    const methods = {
        handleTrade: {
            condition: (select: boolean) => setFilterOptions(prevState => ({
                ...prevState,
                used: select
            })),
            exchange: () => setFilterOptions(prevState => ({
                ...prevState,
                exchange: !prevState.exchange
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
                exchange: () => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        exchange: !prevState.ad.exchange
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