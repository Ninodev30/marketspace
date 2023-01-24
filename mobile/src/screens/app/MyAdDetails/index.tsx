import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { PencilSimpleLine, Power, TrashSimple } from "phosphor-react-native";
import { AppNavigatorRoutesProps } from "src/routes/App.routes";
import BackIcon from "@components/BackIcon";
import AdInfo from "@components/AdInfo";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";

const MyAdDetails: React.FC = () => {
    const [isAdActivated, setIsAdActivated] = useState<boolean>(true);
    const { navigate } = useNavigation<AppNavigatorRoutesProps>();

    const adPhoto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVh6Nwt0h_u8O-PydwbJNfAy868gDtcycKw&usqp=CAU';
    const price: number = 120;
    const buttonIconsSize: number = theme.SCALE.AVERAGE(3);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <BackIcon />
                <TouchableOpacity onPress={() => navigate('editAd')}>
                    <PencilSimpleLine
                        size={theme.SCALE.AVERAGE(4.3)}
                        color={theme.COLORS.BASE.GRAY_100}
                    />
                </TouchableOpacity>
            </View>
            <View style={!isAdActivated && styles.opacityAdPhotoBox}>
                <Image
                    source={{ uri: adPhoto }}
                    resizeMode='cover'
                    style={[styles.adPhoto, !isAdActivated && styles.opacityAdPhoto]}
                />
                {!isAdActivated &&
                    <Text style={styles.inactivatedText}>
                        anúncio desativado
                    </Text>
                }
            </View>
            <View style={styles.content}>
                <AdInfo
                    data={{
                        user: {
                            name: 'Enzo Damascena',
                            photo: 'https://github.com/Ninodev30.png'
                        },
                        ad: {
                            used: true,
                            switch: true,
                            payment: {
                                bankSlip: true,
                                pix: true,
                                money: true,
                                creditCard: true,
                                bankDeposit: true,
                            }
                        },
                        title: 'Bicicleta',
                        description: 'Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.',
                        price
                    }}
                />
                <View style={styles.footer}>
                    <Button
                        title={`${isAdActivated ? 'Desativar' : 'Reativar'} anúncio`}
                        bgColor={isAdActivated ? theme.COLORS.BASE.GRAY_100 : theme.COLORS.PRODUCT.BLUE_LIGHT}
                        type='LIGHT'
                        activeOpacity={0.8}
                        onPress={() => setIsAdActivated(!isAdActivated)}
                    >
                        <Power
                            color={theme.COLORS.BASE.GRAY_600}
                            size={buttonIconsSize}
                        />
                    </Button>
                    <Button
                        title='Excluir anúncio'
                        bgColor={theme.COLORS.BASE.GRAY_500}
                        type='DARK'
                    >
                        <TrashSimple
                            color={theme.COLORS.BASE.GRAY_300}
                            size={buttonIconsSize}
                        />
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};

export default MyAdDetails;