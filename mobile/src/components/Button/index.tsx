import { ColorValue, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import styles from "./styles"

type Props = TouchableOpacityProps & {
    title: string;
    bgColor: ColorValue;
}

const Button: React.FC<Props> = ({ title, bgColor, style, ...rest }) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                style,
                { backgroundColor: bgColor }
            ]}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;