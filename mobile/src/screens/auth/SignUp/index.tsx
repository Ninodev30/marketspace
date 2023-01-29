import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { User as UserIcon, PencilSimpleLine } from 'phosphor-react-native';
import { AuthNavigatorRoutesProps } from "src/routes/Auth.routes";
import SignUpTypeProps from "src/@types/SignUp";
import Icon from '@assets/images/Frame.png';
import Button from "@components/Button";
import Input from "@components/Input";
import theme from "@theme/index";
import styles from "./styles"
import schema from "./schema";
import useAuth from "@hooks/useAuth";

const SignUp: React.FC = () => {
    const { methods: { handleAddPhoto } } = useAuth();
    const { navigate }: AuthNavigatorRoutesProps = useNavigation();

    const { control, handleSubmit, formState: { errors } } = useForm<SignUpTypeProps>(({
        resolver: yupResolver(schema)
    }));

    const { COLORS } = theme;

    const handleSignUp: (data: SignUpTypeProps) => Promise<void> = async ({ name, email, phone, password }) => {
        try {
            console.log(name, email, phone, password);
        }
        catch (error) {
            console.log(error);
        }
    };

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
            <ScrollView style={styles.scrollBox} showsVerticalScrollIndicator={false}>
                <View style={styles.inputBox}>
                    <View style={styles.formBox}>
                        <View style={styles.userBox}>
                            <UserIcon
                                size={40}
                                weight='bold'
                                color={COLORS.BASE.GRAY_400}
                            />
                            <TouchableOpacity style={styles.pencilBox} onPress={() => handleAddPhoto('Criar conta')}>
                                <PencilSimpleLine
                                    size={18}
                                    color={COLORS.BASE.GRAY_600}
                                />
                            </TouchableOpacity>
                        </View>
                        <Controller
                            control={control}
                            name='name'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Nome"
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    errorMessage={errors.name?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name='email'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="E-mail"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name='phone'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    contextMenuHidden={true}
                                    caretHidden={true}
                                    placeholder="Telefone"
                                    keyboardType="number-pad"
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    errorMessage={errors.phone?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name='password'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Senha"
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name='confirm_password'
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Confirmar senha"
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    errorMessage={errors.confirm_password?.message}
                                    onSubmitEditing={handleSubmit(handleSignUp)}
                                    returnKeyType='send'
                                />
                            )}
                        />
                    </View>
                    <Button
                        title='Criar'
                        type="LIGHT"
                        bgColor={COLORS.BASE.GRAY_100}
                        style={{ marginTop: 15 }}
                        onPress={handleSubmit(handleSignUp)}
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
                        onPress={() => navigate("signIn")}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp;