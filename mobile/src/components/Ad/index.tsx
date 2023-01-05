import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import theme from "@theme/index";
import styles from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    price: number;
    used: boolean;
    photo: string;
    userPhoto: string;
}

const Ad: React.FC<Props> = ({ title, price, used, photo, userPhoto, ...rest }) => {
    const { COLORS, SCALE } = theme;

    const priceFormatted: string = price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Image
                source={{ uri: photo }}
                style={styles.photo}
            />
            <View style={styles.topBox}>
                <Image
                    source={{ uri: userPhoto }}
                    style={styles.userPhoto}
                />
                <Text style={[styles.used, { backgroundColor: used ? COLORS.BASE.GRAY_200 : COLORS.PRODUCT.BLUE }]}>
                    {used ? 'usado' : 'novo'}
                </Text>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.moneyBox}>
                <Text style={styles.coin}>
                    R$
                </Text>
                <Text style={styles.price}>
                    {priceFormatted}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Ad;