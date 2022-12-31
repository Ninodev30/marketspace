import { Image, Text, View } from "react-native"
import { User as UserIcon, PencilSimpleLine } from 'phosphor-react-native';
import Icon from '@assets/images/Frame.png';
import Button from "@components/Button";
import Input from "@components/Input";
import theme from "@theme/index";
import styles from "./styles"

const SignUp: React.FC = () => {
    const { COLORS } = theme;

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Image source={Icon} />
                <View style={styles.highlightBox}>
                    <Text style={styles.title}>
                        Boas vindas!
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
                    </Text>
                </View>
            </View>
            <View style={styles.inputBox}>
                <View style={styles.formBox}>
                    <View style={styles.userBox}>
                        <UserIcon
                            size={40}
                            weight='bold'
                            color={COLORS.BASE.GRAY_400}
                        />
                        <View style={styles.pencilBox}>
                            <PencilSimpleLine
                                size={18}
                                color={COLORS.BASE.GRAY_600}
                            />
                        </View>
                    </View>
                    <Input
                        title='Nome'
                    />
                    <Input
                        title='E-mail'
                    />
                    <Input
                        title='Telefone'
                    />
                    <Input
                        title='Senha'
                    />
                    <Input
                        title='Confirmar senha'
                    />
                </View>
                <Button
                    title='Criar'
                    type="LIGHT"
                    bgColor={COLORS.BASE.GRAY_100}
                />
            </View>
            <View style={styles.loginBox}>
                <Text style={styles.subtitle}>
                    Já tem uma conta?
                </Text>
                <Button
                    title='Ir para o login'
                    type="DARK"
                    bgColor={COLORS.BASE.GRAY_500}
                    style={{ marginTop: 10 }}
                />
            </View>
        </View>
    )
}

export default SignUp;