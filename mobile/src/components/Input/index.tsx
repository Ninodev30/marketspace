import { Text, TextInput, TextInputProps, View } from "react-native"
import styles from "./styles";

type Props = TextInputProps & {
    errorMessage?: string;
}

const Input: React.FC<Props> = ({ errorMessage, ...rest }) => {
    const isInvalid: boolean = !!errorMessage;

    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.input,
                    !isInvalid && { marginBottom: 10 }
                ]}
                {...rest}
            />
            {isInvalid &&
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>
            }
        </View>
    )
}

export default Input;