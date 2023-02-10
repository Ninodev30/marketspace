import { View, ActivityIndicator } from "react-native"
import theme from "@theme/index";
import styles from "./styles";

const Loading: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={30}
                color={theme.COLORS.BASE.GRAY_100}
            />
        </View>
    )
};

export default Loading;