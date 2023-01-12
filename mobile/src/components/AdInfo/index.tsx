import { View, ViewProps } from "react-native";
import FilterDataTypeProps from "src/@types/filter";
import styles from "./styles";

type Props = ViewProps & {
    user: {
        name: string;
        photo: string;
    }
    ad: FilterDataTypeProps;
    title: string;
    subtitle: string;
    price: number;
};

const AdInfo: React.FC<Props> = ({ user, ad, title, subtitle, price, style, ...rest }) => {
    return (
        <View style={[style, styles.container]} {...rest}>

        </View>
    );
};

export default AdInfo;