import { ScrollView, Text, View, Image } from "react-native"
import { useDispatch } from "react-redux";
import { increment, incrementAmount } from "@features/counter";
import useAppSelector from "@hooks/useAppSelector";
import Footer from "@components/Footer";
import styles from "./styles";
import AdInfo from "@components/AdInfo";
import { useRoute } from "@react-navigation/native";
import AdTypeProps from "src/@types/ad";

type RouteParams = {
    ad: AdTypeProps;
}

const MyAdPreview: React.FC = () => {
    const { params } = useRoute();
    const { ad } = params as RouteParams;

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
            <View>
                <Text>
                    Pré visualização do anúncio
                </Text>
                <Text>
                    É assim que seu produto vai aparecer!
                </Text>
            </View>
            <ScrollView style={styles.content}>
                <View>
                    <Image
                        source={{ uri: adPhoto }}
                    />
                </View>
                <AdInfo
                    data={ad}
                />
            </ScrollView>
            <Footer>

            </Footer>
        </View>
    );
};

export default MyAdPreview;