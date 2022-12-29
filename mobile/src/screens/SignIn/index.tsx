import { Dimensions, Text, View } from "react-native"
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";

const SignIn: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.headerBox}>
                    <View style={styles.highLightBox}>
                        <Text style={styles.title}>
                            Marketspace
                        </Text>
                        <Text style={styles.subtitle}>
                            Seu espaço de compra e venda
                        </Text>
                    </View>
                </View>
                <Text style={styles.titleAccount}>
                    Acesse sua conta
                </Text>
                <Button
                    title='Entrar'
                    bgColor={theme.COLORS.PRODUCT.BLUE_LIGHT}
                    type='LIGHT'
                    style={{ width: Dimensions.get('window').width - 96 }}
                />
            </View>
        </View>
    )
}

export default SignIn;