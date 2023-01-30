import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AdTradeTypeProps from "src/@types/ad/trade";
import PaymentMethodsTypes from "src/@types/paymentMethods";

const initialState: AdTradeTypeProps = {
    used: false,
    switch: false,
    payment: {
        bankSlip: false,
        pix: false,
        money: false,
        creditCard: false,
        bankDeposit: false
    }
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        condition: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                used: action.payload
            }
        },
        handleSwitch: (state) => {
            return {
                ...state,
                switch: !state.switch
            }
        },
        payment: (state, paymentMethod: PayloadAction<PaymentMethodsTypes>) => {
            return {
                ...state,
                payment: {
                    ...state.payment,
                    [paymentMethod.payload]: !state.payment[paymentMethod.payload]
                }

            }
        },
    }
});

export const { condition, handleSwitch, payment } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;