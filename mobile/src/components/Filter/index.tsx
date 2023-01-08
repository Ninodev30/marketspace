import { Text, View, Pressable } from "react-native"
import { useForm, Controller } from "react-hook-form";
import FilterDataTypeProps from "src/@types/filter";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";

const Filter: React.FC = () => {
    const { control, handleSubmit } = useForm<FilterDataTypeProps>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Filtrar anúncios
            </Text>
            <View style={styles.conditionBox}>
                <Text style={styles.conditionTitle}>
                    Condição
                </Text>
            </View>
            <View style={styles.exchangeBox}>
                <Text style={styles.exchangeTitle}>
                    Aceita troca?
                </Text>
                <Controller
                    control={control}
                    name='exchange'
                    render={({ field: { onChange, value } }) => (
                        <View>
                            <Pressable onPress={() => { }}

                            />
                            <Text>

                            </Text>
                        </View>
                    )}
                />

            </View>
            <View style={styles.paymentBox}>
                <Text style={styles.paymentTitle}>
                    Meios de pagamento aceitos
                </Text>
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
                />
            </View>
        </View>
    );
};

export default Filter;