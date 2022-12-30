import { Image, Text, View } from "react-native"
import Icon from '@assets/images/Frame.png';
import Button from "@components/Button";
import Input from "@components/Input";
import theme from "@theme/index";
import styles from "./styles"

const SignUp: React.FC = () => {
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
                    bgColor={theme.COLORS.BASE.GRAY_100}
                />
            </View>
        </View>
    )
}

export default SignUp;