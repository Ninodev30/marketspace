import { Image, Text, TextProps, View } from "react-native";
import { PaymentDataTypeProps } from "src/@types/ad";
import styles from "./styles";

type Props = TextProps & {
    data: PaymentDataTypeProps;
}

const PaymentMethods: React.FC<Props> = ({ data: { ticket, pix, money, creditCard, bankDeposit }, ...rest }) => {
    return (
        <View style={styles.container}>
            {ticket &&
                <View>
                    <Image

                    />
                    <Text>

                    </Text>
                </View>
            }
            {pix &&
                <View>
                    <Image

                    />
                    <Text>

                    </Text>
                </View>
            }
            {money &&
                <View>
                    <Image

                    />
                    <Text>

                    </Text>
                </View>
            }
            {creditCard &&
                <View>
                    <Image

                    />
                    <Text>

                    </Text>
                </View>
            }
            {bankDeposit &&
                <View>
                    <Image

                    />
                    <Text>

                    </Text>
                </View>
            }
        </View>
    );
};

export default PaymentMethods;