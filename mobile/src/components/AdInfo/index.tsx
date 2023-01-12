import PaymentMethods from "@components/paymentMethods";
import { Image, Text, View, ViewProps } from "react-native";
import AdDataTypeProps, { PaymentDataTypeProps } from "src/@types/ad";
import styles from "./styles";

type Props = ViewProps & {
    user: {
        name: string;
        photo: string;
    }
    ad: AdDataTypeProps;
    title: string;
    subtitle: string;
    price: number;
};

const AdInfo: React.FC<Props> = ({ user, ad, title, subtitle, price, style, ...rest }) => {
    const paymentMethods: PaymentDataTypeProps = {
        ticket: true,
        pix: true,
        money: true,
        creditCard: true,
        bankDeposit: true
    };

    return (
        <View style={[style, styles.container]} {...rest}>
            <View>
                <Image />
                <Text>

                </Text>
            </View>
            <View>
                <Text>

                </Text>
                <View>
                    <Text>

                    </Text>
                    <Text>

                    </Text>
                </View>
                <Text>

                </Text>
            </View>
            <View>
                <View>
                    <Text>

                    </Text>
                    <Text>

                    </Text>
                </View>
                <View>
                    <Text>

                    </Text>
                    <PaymentMethods data={paymentMethods} />
                </View>
            </View>
        </View>
    );
};

export default AdInfo;