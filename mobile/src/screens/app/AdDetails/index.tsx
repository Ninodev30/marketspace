import { Image, ScrollView, Text, View } from "react-native"
import { WhatsappLogo } from "phosphor-react-native";
import formattNumberToPrice from "@functions/formattNumberToPrice";
import BackIcon from "@components/BackIcon";
import AdInfo from "@components/AdInfo";
import Footer from "@components/Footer";
import Button from "@components/Button";
import theme from "@theme/index";
import styles from "./styles";

const AdDetails: React.FC = () => {
    const adPhoto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVh6Nwt0h_u8O-PydwbJNfAy868gDtcycKw&usqp=CAU';
    const price: number = 120;
    const priceFormatted: string = formattNumberToPrice(price);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <BackIcon style={styles.header} />
                <Image
                    source={{ uri: adPhoto }}
                    resizeMode='cover'
                    style={styles.adPhoto}
                />
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
                    description='Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.'
                    price={price}
                />
            </ScrollView>
            <Footer>
                <View style={styles.footerContent}>
                    <Text style={styles.footerCoin}>
                        R$
                    </Text>
                    <Text style={styles.footerPrice}>
                        {priceFormatted}
                    </Text>
                </View>
                <Button
                    bgColor={theme.COLORS.PRODUCT.BLUE_LIGHT}
                    title='Entrar em contato'
                    type='LIGHT'
                >
                    <WhatsappLogo
                        weight='fill'
                        size={theme.SCALE.AVERAGE(3)}
                        color={theme.COLORS.BASE.GRAY_600}
                    />
                </Button>
            </Footer>
        </View>
    );
};

export default AdDetails;