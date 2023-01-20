import { Image, Text, View, ViewProps } from "react-native";
import PaymentMethods from "@components/paymentMethods";
import AdTypeProps from "src/@types/ad";
import styles from "./styles";
import formattNumberToPrice from "@functions/formattNumberToPrice";

type Props = ViewProps & AdTypeProps;

const AdInfo: React.FC<Props> = ({ user, ad, title, description, price, style, ...rest }) => {
    const priceFormatted: string = formattNumberToPrice(price);

    return (
        <View style={[style, styles.container]} {...rest}>
            <View style={styles.header}>
                <Image
                    style={styles.userPhoto}
                    source={{ uri: user?.photo }}
                />
                <Text style={styles.userName}>
                    {user?.name}
                </Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.usedText}>
                    {ad.used ? 'usado' : 'novo'}
                </Text>
                <View style={styles.infoBoxHeader}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.coin}>
                            R$
                        </Text>
                        <Text style={styles.priceText}>
                            {priceFormatted}
                        </Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>
                    {description}
                </Text>
            </View>
            <View>
                <View style={styles.tradeBox}>
                    <Text style={styles.minititle}>
                        Aceita troca?
                    </Text>
                    <Text style={styles.subtitle}>
                        {ad.switch ? 'Sim' : 'Não'}
                    </Text>
                </View>
                <View style={styles.paymentBox}>
                    <Text style={styles.minititle}>
                        Meios de pagamento
                    </Text>
                    <PaymentMethods data={ad.payment} />
                </View>
            </View>
        </View>
    );
};

export default AdInfo;