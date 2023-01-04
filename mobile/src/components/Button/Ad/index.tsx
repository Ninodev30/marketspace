import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
    price: number;
    used: boolean;
    photo: string;
    userPhoto: string;
}

const Ad: React.FC<Props> = ({ title, price, used, photo, userPhoto, ...rest }) => {
    return (
        <TouchableOpacity {...rest}>
            <Image />
            <Text>
                {title}
            </Text>
            <Text>
                {price}
            </Text>
            <View>
                <Image />
                <Text>
                    {used ? 'usado' : 'novo'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Ad;