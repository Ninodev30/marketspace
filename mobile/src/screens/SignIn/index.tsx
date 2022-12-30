import { Image, Text, View } from "react-native"
import Button from "@components/Button";
import theme from "@theme/index";
import Icon from '@assets/images/Frame.png';
import styles from "./styles";
import Input from "@components/Input";

const SignIn: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.headerBox}>
                    <Image source={Icon} />
                    <View style={styles.highLightBox}>
                        <Text style={styles.title}>
                            Marketspace
                        </Text>
                        <Text style={styles.subtitle}>
                            Seu espaço de compra e venda
                        </Text>
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.titleAccount}>
                        Acesse sua conta
                    </Text>
                    <Input
                        title='E-mail'
                    />
                    <Input
                        title='Senha'
                    />
                </View>
                <Button
                    title='Entrar'
                    type='LIGHT'
                    bgColor={theme.COLORS.PRODUCT.BLUE_LIGHT}
                    style={{ marginTop: theme.HEIGHT * 0.03 }}
                />
            </View>
            <View style={styles.newAccountBox}>
                <Text style={styles.titleAccount}>
                    Ainda não tem acesso?
                </Text>
                <Button
                    title='Criar uma conta'
                    type='DARK'
                    bgColor={theme.COLORS.BASE.GRAY_500}
                    style={{ marginTop: 15 }}
                />
            </View>
        </View>
    )
}

export default SignIn;