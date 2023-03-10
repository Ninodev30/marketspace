import { useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Asset } from "react-native-image-picker";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { User as UserIcon, PencilSimpleLine } from 'phosphor-react-native';
import { signUp } from "@features/auth";
import { AuthNavigatorRoutesProps } from "src/routes/Auth.routes";
import { SignUpFormTypeProps, SignUpUserTypeProps } from "src/@types/auth/SignUp";
import { handlePickPhoto, handleTakePhoto } from "@functions/handlePhoto";
import PhotoFileProps from "src/@types/photoFile";
import useAppDispatch from "@hooks/useAppDispatch";
import Icon from '@assets/images/Frame.png';
import Button from "@components/Button";
import Input from "@components/Input";
import theme from "@theme/index";
import schema from "./schema";
import styles from "./styles"
import AssetToPhotoFile from "@functions/AssetToPhotoFile.";

const SignUp: React.FC = () => {
    const [loading, setIsLoading] = useState<boolean>(true);
    const [avatar, setAvatar] = useState<Asset>({} as Asset);
    const { navigate }: AuthNavigatorRoutesProps = useNavigation();
    const dispatch = useAppDispatch();

    const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormTypeProps>(({
        resolver: yupResolver(schema)
    }));

    const handleUpdateAvatar: () => Promise<void> = async () => {
        try {
            Alert.alert('Criar usuário', 'adicionar foto', [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Tirar foto',
                    onPress: async () => {
                        try {
                            const photoSelected: Asset | undefined = await handleTakePhoto();

                            if (photoSelected)
                                setAvatar(photoSelected);
                        }
                        catch (error) {
                            throw error;
                        }
                    }
                },
                {
                    text: 'Acessar galeria',
                    onPress: async () => {
                        try {
                            const photoSelected: Asset | undefined = await handlePickPhoto();

                            if (photoSelected)
                                setAvatar(photoSelected);
                        }
                        catch (error) {
                            throw error;
                        }
                    }
                }
            ]);
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleSignUp: (data: SignUpFormTypeProps) => Promise<void> = async ({ confirm_password, ...data }) => {
        try {
            if (!avatar.uri)
                return Alert.alert('Criar usuário', 'Selecione sua foto de perfil');

            setIsLoading(true);

            const photoFile: PhotoFileProps = AssetToPhotoFile(avatar, data.name);

            const signUpData: SignUpUserTypeProps = {
                avatar: photoFile,
                ...data
            };

            await dispatch(signUp(signUpData)).unwrap();
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
                            {avatar.uri!! ?
                                <Image
                                    source={{ uri: avatar.uri }}
                                    style={styles.userImage}
                                />
                                :
                                <UserIcon
                                    size={40}
                                    weight='bold'
                                    color={theme.COLORS.BASE.GRAY_400}
                                />
                            }
                            <TouchableOpacity style={styles.pencilBox} onPress={handleUpdateAvatar}>
                                <PencilSimpleLine
                                    size={18}
                                    color={theme.COLORS.BASE.GRAY_600}
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
                        bgColor={theme.COLORS.BASE.GRAY_100}
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
                        bgColor={theme.COLORS.BASE.GRAY_500}
                        style={{ marginTop: 10 }}
                        onPress={() => navigate("signIn")}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp;