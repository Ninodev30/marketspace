import { ReactNode } from "react";
import { ColorValue, Text, TouchableOpacity, TouchableOpacityProps, Image } from "react-native"
import theme from "@theme/index";
import styles from "./styles"

type Props = TouchableOpacityProps & {
    title: string;
    bgColor: ColorValue;
    type: 'LIGHT' | 'DARK';
    children?: ReactNode;
}

const Button: React.FC<Props> = ({ title, bgColor, type, children, style, ...rest }) => {
    const { COLORS: { BASE: { GRAY_200, GRAY_700 } }, SCALE } = theme;

    return (
        <TouchableOpacity
            style={[
                styles.container,
                style,
                { backgroundColor: bgColor }
            ]}
            {...rest}
        >
            {children}
            <Text style={[
                styles.title,
                {
                    color: type === "LIGHT" ? GRAY_700 : GRAY_200,
                    paddingLeft: children ? SCALE.WIDTH(2) : 0
                }
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;