import { useState } from "react";
import { ScrollView, Text, View, Image } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import { Tag, ArrowLeft } from "phosphor-react-native";
import { AppNavigatorRoutesProps } from "src/routes/App.routes";
import AdTypeProps from "src/@types/ad";
import AdInfo from "@components/AdInfo";
import Footer from "@components/Footer";
import Button from "@components/Button";
import theme from "@theme/index";
import styles, { iconsTheme } from "./styles";

type RouteParams = {
    ad: AdTypeProps;
    state: 'CREATE' | 'EDIT';
};

const MyAdPreview: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { params } = useRoute();
    const { ad, state } = params as RouteParams;
    const { navigate } = useNavigation<AppNavigatorRoutesProps>();

    const adPhoto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVh6Nwt0h_u8O-PydwbJNfAy868gDtcycKw&usqp=CAU';

    const handlePostAd = async () => {
        try {
            setIsLoading(true);

            // navigate('myAds')
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Pré visualização do anúncio
                </Text>
                <Text style={styles.subtitle}>
                    É assim que seu produto vai aparecer!
                </Text>
            </View>
            <ScrollView style={styles.content}>
                <View>
                    <Image
                        source={{ uri: adPhoto }}
                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
                <AdInfo
                    data={ad}
                />
            </ScrollView>
            <Footer style={styles.footer}>
                <Button
                    style={{ flex: 1 }}
                    bgColor={theme.COLORS.BASE.GRAY_500}
                    title='Voltar e editar'
                    type='DARK'
                    onPress={() => state === "CREATE" ? navigate('createAd') : navigate('editAd')}
                >
                    <ArrowLeft
                        size={iconsTheme.size}
                        color={iconsTheme.color.arrow}
                    />
                </Button>
                <Button
                    style={{ flex: 1 }}
                    bgColor={theme.COLORS.PRODUCT.BLUE_LIGHT}
                    title='Publicar'
                    type='LIGHT'
                    onPress={handlePostAd}
                >
                    <Tag
                        size={iconsTheme.size}
                        color={iconsTheme.color.tag}
                    />
                </Button>
            </Footer>
        </View>
    );
};

export default MyAdPreview;