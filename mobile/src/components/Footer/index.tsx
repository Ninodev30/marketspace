import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import styles from "./styles";

type Props = ViewProps & {
    children: ReactNode;
};

const Footer: React.FC<Props> = ({ children, style, ...rest }) => {
    return (
        <View style={[style, styles.container]} {...rest}>
            {children}
        </View>
    );
};

export default Footer;