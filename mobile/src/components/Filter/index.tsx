import { Text, View, Pressable } from "react-native"
import { useForm, Controller } from "react-hook-form";
import { X } from "phosphor-react-native";
import FilterDataTypeProps from "src/@types/filter";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";

const Filter: React.FC = () => {
    const { control, handleSubmit } = useForm<FilterDataTypeProps>();

    const handleApplyFilter: (data: FilterDataTypeProps) => void = (data) => {
        console.log(data);
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
                <Controller
                    control={control}
                    name='exchange'
                    render={({ field: { value } }) => (
                        <View>
                            <Pressable onPress={() => { value = true; }}>
                                <Text>
                                    novo
                                </Text>
                            </Pressable>
                        </View>
                    )}
                />

            </View>
            <View style={styles.paymentBox}>
                <Text style={styles.subtitle}>
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
                    onPress={handleSubmit(handleApplyFilter)}
                />
            </View>
        </View>
    );
};

export default Filter;