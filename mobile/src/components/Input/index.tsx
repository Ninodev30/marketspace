import { Text, TextInput, TextInputProps, View } from "react-native"
import theme from "@theme/index";
import styles from "./styles";

type Props = TextInputProps & {
    errorMessage?: string;
    big?: boolean;
}

const Input: React.FC<Props> = ({ errorMessage, big, style, ...rest }) => {
    const isInvalid: boolean = !!errorMessage;

    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    style,
                    styles.input,
                    { height: big ? theme.SCALE.HEIGHT(15) : theme.SCALE.HEIGHT(6) },
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