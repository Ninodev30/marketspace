import { useState } from "react";
import { Text, View, Pressable, Switch } from "react-native"
import { X, Check } from "phosphor-react-native";
import AdTradeTypeProps from "src/@types/adTrade";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";
import ConditionButton from "@components/ConditionButton";
import useAuth from "@hooks/useAuth";

const Filter: React.FC = () => {
    const { methods: { handleTrade } } = useAuth();

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

    const handleApplyFilter: () => void = () => {
        console.log(filterOptions);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Filtrar anúncios
                </Text>
                <X
                    color={theme.COLORS.BASE.GRAY_400}
                    size={theme.SCALE.AVERAGE(4.3)}
                    weight='bold'
                />
            </View>
            <View style={styles.conditionBox}>
                <Text style={styles.subtitle}>
                    Condição
                </Text>
                <View style={styles.conditionButtonsBox}>
                    <ConditionButton
                        title='NOVO' isSelected={!filterOptions.used}
                        onPress={() => handleTrade.condition(false)}
                    />
                    <ConditionButton
                        title='USADO' isSelected={filterOptions.used}
                        onPress={() => handleTrade.condition(true)}
                    />
                </View>
            </View>
            <View style={styles.exchangeBox}>
                <Text style={styles.subtitle}>
                    Aceita troca?
                </Text>
                <Switch
                    thumbColor={theme.COLORS.BASE.GRAY_700}
                    trackColor={{ true: theme.COLORS.PRODUCT.BLUE_LIGHT, false: theme.COLORS.BASE.GRAY_500 }}
                    onValueChange={handleTrade.exchange}
                    value={filterOptions.exchange}
                />
            </View>
            <View style={styles.paymentBox}>
                <Text style={styles.subtitle}>
                    Meios de pagamento aceitos
                </Text>
                <View key='ticket' style={styles.paymentMethodBox}>
                    <Pressable
                        style={[styles.paymentButton, filterOptions.payment.ticket ? styles.paymentButtonSelected : styles.paymentButtonUnselected]}
                        onPress={() => handleTrade.payment('ticket')}
                    >
                        {filterOptions.payment.ticket &&
                            <Check
                                color={theme.COLORS.BASE.WHITE}
                                size={16}
                            />
                        }
                    </Pressable>
                    <Text style={styles.paymentMethodTitle}>
                        Boleto
                    </Text>
                </View>
                <View key='pix' style={styles.paymentMethodBox}>
                    <Pressable
                        style={[styles.paymentButton, filterOptions.payment.pix ? styles.paymentButtonSelected : styles.paymentButtonUnselected]}
                        onPress={() => handleTrade.payment('pix')}
                    >
                        {filterOptions.payment.pix &&
                            <Check
                                color={theme.COLORS.BASE.WHITE}
                                size={16}
                            />
                        }
                    </Pressable>
                    <Text style={styles.paymentMethodTitle}>
                        Pix
                    </Text>
                </View>
                <View key='money' style={styles.paymentMethodBox}>
                    <Pressable
                        style={[styles.paymentButton, filterOptions.payment.money ? styles.paymentButtonSelected : styles.paymentButtonUnselected]}
                        onPress={() => handleTrade.payment('money')}
                    >
                        {filterOptions.payment.money &&
                            <Check
                                color={theme.COLORS.BASE.WHITE}
                                size={16}
                            />
                        }
                    </Pressable>
                    <Text style={styles.paymentMethodTitle}>
                        Dinheiro
                    </Text>
                </View>
                <View key='creditCard' style={styles.paymentMethodBox}>
                    <Pressable
                        style={[styles.paymentButton, filterOptions.payment.creditCard ? styles.paymentButtonSelected : styles.paymentButtonUnselected]}
                        onPress={() => handleTrade.payment('creditCard')}
                    >
                        {filterOptions.payment.creditCard &&
                            <Check
                                color={theme.COLORS.BASE.WHITE}
                                size={16}
                            />
                        }
                    </Pressable>
                    <Text style={styles.paymentMethodTitle}>
                        Cartão de Crédito
                    </Text>
                </View>
                <View key='bankDeposit' style={styles.paymentMethodBox}>
                    <Pressable
                        style={[styles.paymentButton, filterOptions.payment.bankDeposit ? styles.paymentButtonSelected : styles.paymentButtonUnselected]}
                        onPress={() => handleTrade.payment('bankDeposit')}
                    >
                        {filterOptions.payment.bankDeposit &&
                            <Check
                                color={theme.COLORS.BASE.WHITE}
                                size={16}
                            />
                        }
                    </Pressable>
                    <Text style={styles.paymentMethodTitle}>
                        Depósito Bancário
                    </Text>
                </View>
            </View>
            <View style={styles.actions}>
                <Button
                    bgColor={theme.COLORS.BASE.GRAY_500}
                    style={{ width: theme.SCALE.WIDTH(36) }}
                    title='Resetar filtros'
                    type='DARK'
                />
                <Button
                    bgColor={theme.COLORS.BASE.GRAY_100}
                    style={{ width: theme.SCALE.WIDTH(36) }}
                    title='Aplicar filtros'
                    type='LIGHT'
                    onPress={handleApplyFilter}
                />
            </View>
        </View>
    );
};

export default Filter;