import { useState } from "react";
import { Image, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "@features/user";
import { AuthNavigatorRoutesProps } from "src/routes/Auth.routes";
import useAppDispatch from "@hooks/useAppDispatch";
import SignInTypeProps from "src/@types/auth/SignIn";
import Icon from '@assets/images/Frame.png';
import Button from "@components/Button";
import Input from "@components/Input";
import theme from "@theme/index";
import styles from "./styles";
import schema from "./schema";

const SignIn: React.FC = () => {
    const [loading, setIsLoading] = useState<boolean>(true);
    const { navigate }: AuthNavigatorRoutesProps = useNavigation();
    const dispatch = useAppDispatch();

    const { control, handleSubmit, formState: { errors } } = useForm<SignInTypeProps>({
        resolver: yupResolver(schema)
    });

    const handleSignIn: (data: SignInTypeProps) => Promise<void> = async (data) => {
        try {
            setIsLoading(true);

            await dispatch(signIn(data)).unwrap();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    };

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
                    <Controller
                        control={control}
                        name='email'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='E-mail'
                                keyboardType="email-address"
                                autoCapitalize='none'
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name='password'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='Senha'
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(handleSignIn)}
                                returnKeyType='send'
                                style={styles.input}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />
                </View>
                <Button
                    title='Entrar'
                    type='LIGHT'
                    bgColor={theme.COLORS.PRODUCT.BLUE_LIGHT}
                    style={{ marginTop: theme.SCALE.HEIGHT(3) }}
                    onPress={handleSubmit(handleSignIn)}
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
                    onPress={() => navigate('signUp')}
                />
            </View>
        </View>
    )
}

export default SignIn;