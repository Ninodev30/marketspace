import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import styles from "./styles";

type Props = TouchableOpacityProps & {
    used: boolean;
}

const Condition: React.FC<Props> = ({ used, style, ...rest }) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={() => { }}
            {...rest}
        >
            <Text style={styles.title}>
                {used ? 'usado' : 'novo'}
            </Text>
        </TouchableOpacity>
    );
};

export default Condition;