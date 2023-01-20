import { Text, TouchableOpacity, View, Switch } from "react-native"
import { X } from "phosphor-react-native";
import useAuth from "@hooks/useAuth";
import Button from "@components/Button";
import ConditionButton from "@components/ConditionButton";
import PaymentBox from "@components/PaymentBox";
import theme from "@theme/index";
import styles from "./styles";

const Filter: React.FC = () => {
    const { filterOptions, filter: { setIsShowFilter }, methods: { handleTrade } } = useAuth();

    const handleApplyFilter: () => void = () => {
        setIsShowFilter(false);
        console.log(filterOptions);
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
            <View style={styles.switchBox}>
                <Text style={styles.subtitle}>
                    Aceita troca?
                </Text>
                <Switch
                    thumbColor={theme.COLORS.BASE.GRAY_700}
                    trackColor={{ true: theme.COLORS.PRODUCT.BLUE_LIGHT, false: theme.COLORS.BASE.GRAY_500 }}
                    onValueChange={handleTrade.switch}
                    value={filterOptions.switch}
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