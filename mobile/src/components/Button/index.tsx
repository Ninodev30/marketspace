import { ColorValue, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import theme from "@theme/index";
import styles from "./styles"

type Props = TouchableOpacityProps & {
    title: string;
    bgColor: ColorValue;
    type: 'LIGHT' | 'DARK';
}

const Button: React.FC<Props> = ({ title, bgColor, type, style, ...rest }) => {
    const { COLORS: { BASE: { GRAY_200, GRAY_700 } } } = theme;

    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: bgColor },
                style,
            ]}
            {...rest}
        >
            <Text style={[styles.title, { color: type === "LIGHT" ? GRAY_700 : GRAY_200 }]}>
                {title}
            </Text>
        </TouchableOpacity >
    )
}

export default Button;