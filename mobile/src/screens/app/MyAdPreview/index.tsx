import { ScrollView, Text, View, Image } from "react-native"
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { increment, incrementAmount } from "@features/counter";
import { AppNavigatorRoutesProps } from "src/routes/App.routes";
import useAppSelector from "@hooks/useAppSelector";
import AdTypeProps from "src/@types/ad";
import AdInfo from "@components/AdInfo";
import Footer from "@components/Footer";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";

type RouteParams = {
    ad: AdTypeProps;
}

const MyAdPreview: React.FC = () => {
    const { params } = useRoute();
    const { ad } = params as RouteParams;
    const { navigate, goBack } = useNavigation<AppNavigatorRoutesProps>();

    const test = useAppSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const adPhoto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVh6Nwt0h_u8O-PydwbJNfAy868gDtcycKw&usqp=CAU';

    const handleOnClick = () => {
        dispatch(increment());
    };

    const handleAmount = (amount: number) => {
        dispatch(incrementAmount(amount));
    };

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
                    bgColor={theme.COLORS.BASE.GRAY_500}
                    title='Voltar e editar'
                    type='DARK'
                    onPress={() => navigate('createAd')}
                >

                </Button>
                <Button
                    bgColor={theme.COLORS.PRODUCT.BLUE_LIGHT}
                    title='Publicar'
                    type='LIGHT'
                    onPress={() => navigate('myAds')}
                >

                </Button>
            </Footer>
        </View>
    );
};

export default MyAdPreview;