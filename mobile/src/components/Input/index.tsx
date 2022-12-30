import { TextInput, TextInputProps } from "react-native"
import styles from "./styles";

type Props = TextInputProps & {
    title: string;
}

const Input: React.FC<Props> = ({ title, style, ...rest }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={title}
            {...rest}
        />
    )
}

export default Input;