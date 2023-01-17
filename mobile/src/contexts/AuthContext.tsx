import { createContext, ReactNode, useState } from 'react';
import AdTradeTypeProps from 'src/@types/adTrade';
import PaymentMethodsTypes from 'src/@types/paymentMethods';

export type AuthContextDataProps = {
    user: any;
    methods: any;
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
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                methods
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;