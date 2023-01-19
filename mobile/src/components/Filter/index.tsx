import { Text, View, Switch } from "react-native"
import { X } from "phosphor-react-native";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";
import ConditionButton from "@components/ConditionButton";
import useAuth from "@hooks/useAuth";
import PaymentBox from "@components/PaymentBox";
import { TouchableOpacity } from "react-native";

const Filter: React.FC = () => {
    const { filterOptions, filter: { isShowFilter, setIsShowFilter }, methods: { handleTrade } } = useAuth();

    const handleApplyFilter: () => void = () => {
        console.log(filterOptions);
        setIsShowFilter(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Filtrar anúncios
                </Text>
                <TouchableOpacity onPress={() => setIsShowFilter(false)}>
                    <X
                        color={theme.COLORS.BASE.GRAY_400}
                        size={theme.SCALE.AVERAGE(4.3)}
                        weight='bold'
                    />
                </TouchableOpacity>
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
            <PaymentBox
                data={filterOptions.payment}
                isToTheFilter={true}
            />
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