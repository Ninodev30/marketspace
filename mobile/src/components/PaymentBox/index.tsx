import { Pressable, Text, View, ViewProps } from "react-native";
import { Check } from "phosphor-react-native";
import AdTradePaymentTypeProps from "src/@types/adTradePayment";
import useAuth from "@hooks/useAuth";
import theme from "@theme/index";
import styles from "./styles";

type Props = ViewProps & {
    data: AdTradePaymentTypeProps;
    isToTheFilter: boolean;
};

const PaymentBox: React.FC<Props> = ({ data, isToTheFilter, style, ...rest }) => {
    const context = useAuth();

    const paymentData = isToTheFilter ? context.filterOptions : context.adData.ad;
    const functions = isToTheFilter ? context.methods.handleTrade : context.methods.handleAdData.handleTrade;

    return (
        <View style={[style, styles.container]} {...rest}>
            <Text style={styles.title}>
                Meios de pagamento aceitos
            </Text>
            <View key='ticket' style={styles.content}>
                <Pressable
                    style={[styles.button, paymentData.payment.ticket ? styles.buttonSelected : styles.buttonUnselected]}
                    onPress={() => functions.payment('ticket')}
                >
                    {paymentData.payment.ticket &&
                        <Check
                            color={theme.COLORS.BASE.WHITE}
                            size={16}
                        />
                    }
                </Pressable>
                <Text style={styles.subtitle}>
                    Boleto
                </Text>
            </View>
            <View key='pix' style={styles.content}>
                <Pressable
                    style={[styles.button, paymentData.payment.pix ? styles.buttonSelected : styles.buttonUnselected]}
                    onPress={() => functions.payment('pix')}
                >
                    {paymentData.payment.pix &&
                        <Check
                            color={theme.COLORS.BASE.WHITE}
                            size={16}
                        />
                    }
                </Pressable>
                <Text style={styles.subtitle}>
                    Pix
                </Text>
            </View>
            <View key='money' style={styles.content}>
                <Pressable
                    style={[styles.button, paymentData.payment.money ? styles.buttonSelected : styles.buttonUnselected]}
                    onPress={() => functions.payment('money')}
                >
                    {paymentData.payment.money &&
                        <Check
                            color={theme.COLORS.BASE.WHITE}
                            size={16}
                        />
                    }
                </Pressable>
                <Text style={styles.subtitle}>
                    Dinheiro
                </Text>
            </View>
            <View key='creditCard' style={styles.content}>
                <Pressable
                    style={[styles.button, paymentData.payment.creditCard ? styles.buttonSelected : styles.buttonUnselected]}
                    onPress={() => functions.payment('creditCard')}
                >
                    {paymentData.payment.creditCard &&
                        <Check
                            color={theme.COLORS.BASE.WHITE}
                            size={16}
                        />
                    }
                </Pressable>
                <Text style={styles.subtitle}>
                    Cartão de Crédito
                </Text>
            </View>
            <View key='bankDeposit' style={styles.content}>
                <Pressable
                    style={[styles.button, paymentData.payment.bankDeposit ? styles.buttonSelected : styles.buttonUnselected]}
                    onPress={() => functions.payment('bankDeposit')}
                >
                    {paymentData.payment.bankDeposit &&
                        <Check
                            color={theme.COLORS.BASE.WHITE}
                            size={16}
                        />
                    }
                </Pressable>
                <Text style={styles.subtitle}>
                    Depósito Bancário
                </Text>
            </View>
        </View>
    );
};

export default PaymentBox;