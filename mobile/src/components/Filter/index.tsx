import { useState } from "react";
import { Text, View, Pressable, Switch } from "react-native"
import { X, Check } from "phosphor-react-native";
import AdDataTypeProps from "src/@types/ad";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";
import ConditionButton from "@components/ConditionButton";

const Filter: React.FC = () => {
    const [filterOptions, setFilterOptions] = useState<AdDataTypeProps>({
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

    const handleFilter = {
        condition: (select: boolean) => setFilterOptions(prevState => ({
            ...prevState,
            used: select
        }))
        ,
        exchange: () => setFilterOptions(prevState => ({
            ...prevState,
            exchange: !prevState.exchange
        }))
        ,
        payment: {
            ticket: () => setFilterOptions(prevState => ({
                ...prevState,
                payment: {
                    ...prevState.payment,
                    ticket: !prevState.payment.ticket
                }
            }))
            ,
            pix: () => setFilterOptions(prevState => ({
                ...prevState,
                payment: {
                    ...prevState.payment,
                    pix: !prevState.payment.pix
                }
            }))
            ,
            money: () => setFilterOptions(prevState => ({
                ...prevState,
                payment: {
                    ...prevState.payment,
                    money: !prevState.payment.money
                }
            }))
            ,
            creditCard: () => setFilterOptions(prevState => ({
                ...prevState,
                payment: {
                    ...prevState.payment,
                    creditCard: !prevState.payment.creditCard
                }
            }))
            ,
            bankDeposit: () => setFilterOptions(prevState => ({
                ...prevState,
                payment: {
                    ...prevState.payment,
                    bankDeposit: !prevState.payment.bankDeposit
                }
            }))
        }
    };

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
                        onPress={() => handleFilter.condition(false)}
                    />
                    <ConditionButton
                        title='USADO' isSelected={filterOptions.used}
                        onPress={() => handleFilter.condition(true)}
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
                    onValueChange={handleFilter.exchange}
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
                        onPress={handleFilter.payment.ticket}
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
                        onPress={handleFilter.payment.pix}
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
                        onPress={handleFilter.payment.money}
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
                        onPress={handleFilter.payment.creditCard}
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
                        onPress={handleFilter.payment.bankDeposit}
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