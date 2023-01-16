import { useState } from "react";
import { Image, ScrollView, View } from "react-native"
import { PencilSimpleLine, Power, TrashSimple } from "phosphor-react-native";
import BackIcon from "@components/BackIcon";
import AdInfo from "@components/AdInfo";
import Button from "@components/Button";
import styles from "./styles";
import theme from "@theme/index";

const MyAdDetails: React.FC = () => {
    const [isAdActivated, setIsAdActivated] = useState<boolean>(true);

    const adPhoto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVh6Nwt0h_u8O-PydwbJNfAy868gDtcycKw&usqp=CAU';
    const price: number = 120;
    const buttonIconsSize: number = theme.SCALE.AVERAGE(3);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <BackIcon />
                <PencilSimpleLine
                    size={theme.SCALE.AVERAGE(4.3)}
                    color={theme.COLORS.BASE.GRAY_100}
                />
            </View>
            <View style={!isAdActivated && styles.opacityAdPhoto}>
                <Image
                    source={{ uri: adPhoto }}
                    resizeMode='cover'
                    style={styles.adPhoto}
                />
            </View>
            <View style={styles.content}>
                <AdInfo
                    user={{
                        name: 'Enzo Damascena',
                        photo: 'https://github.com/Ninodev30.png'
                    }}
                    ad={{
                        used: true,
                        exchange: true,
                        payment: {
                            ticket: true,
                            pix: true,
                            money: true,
                            creditCard: true,
                            bankDeposit: true,
                        }
                    }}
                    title='Bicicleta'
                    subtitle='Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.'
                    price={price}
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