import { Text, View } from "react-native"
import { useForm, Controller } from "react-hook-form";
import FilterDataTypeProps from "src/@types/filter";
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
                        <Text>

                        </Text>
                    )}
                />
            </View>
        </View>
    );
};

export default Filter;