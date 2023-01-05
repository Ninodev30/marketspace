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
                <Text style={styles.used}>
                    {used ? 'usado' : 'novo'}
                </Text>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.price}>
                {price}
            </Text>
        </TouchableOpacity>
    );
};

export default Ad;