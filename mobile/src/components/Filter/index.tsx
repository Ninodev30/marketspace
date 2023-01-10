import { useState } from "react";
import { Text, View, Pressable, FlatList } from "react-native"
import { X, Check } from "phosphor-react-native";
import FilterDataTypeProps from "src/@types/filter";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";

const Filter: React.FC = () => {
    const [filterOptions, setFilterOptions] = useState<FilterDataTypeProps>({
        used: true,
        exchange: true,
        payment: {
            ticket: true,
            pix: false,
            money: true,
            creditCard: true,
            bankDeposit: false
        }
    } as FilterDataTypeProps);

    const handleApplyFilter: () => void = () => {
        console.log(filterOptions);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Filtrar anúncios
                </Text>
                <X
                    color={theme.COLORS.BASE.GRAY_400}
                    size={24}
                />
            </View>
            <View style={styles.conditionBox}>
                <Text style={styles.subtitle}>
                    Condição
                </Text>
            </View>
            <View style={styles.exchangeBox}>
                <Text style={styles.subtitle}>
                    Aceita troca?
                </Text>

            </View>
            <View style={styles.paymentBox}>
                <Text style={styles.subtitle}>
                    Meios de pagamento aceitos
                </Text>
                <View key='ticket' style={styles.paymentMethodBox}>
                    <Pressable
                        style={[styles.paymentButton, filterOptions.payment.ticket ? styles.selected : styles.unselected]}
                        onPress={() => {
                            setFilterOptions(prevState => ({
                                ...prevState,
                                payment: {
                                    ...prevState.payment,
                                    ticket: !prevState.payment.ticket
                                }
                            }))
                        }}
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
                        style={[styles.paymentButton, filterOptions.payment.pix ? styles.selected : styles.unselected]}
                        onPress={() => {
                            setFilterOptions(prevState => ({
                                ...prevState,
                                payment: {
                                    ...prevState.payment,
                                    pix: !prevState.payment.pix
                                }
                            }))
                        }}
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
                        style={[styles.paymentButton, filterOptions.payment.money ? styles.selected : styles.unselected]}
                        onPress={() => {
                            setFilterOptions(prevState => ({
                                ...prevState,
                                payment: {
                                    ...prevState.payment,
                                    money: !prevState.payment.money
                                }
                            }))
                        }}
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
                        style={[styles.paymentButton, filterOptions.payment.creditCard ? styles.selected : styles.unselected]}
                        onPress={() => {
                            setFilterOptions(prevState => ({
                                ...prevState,
                                payment: {
                                    ...prevState.payment,
                                    creditCard: !prevState.payment.creditCard
                                }
                            }))
                        }}
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
                        style={[styles.paymentButton, filterOptions.payment.bankDeposit ? styles.selected : styles.unselected]}
                        onPress={() => {
                            setFilterOptions(prevState => ({
                                ...prevState,
                                payment: {
                                    ...prevState.payment,
                                    bankDeposit: !prevState.payment.bankDeposit
                                }
                            }))
                        }}
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