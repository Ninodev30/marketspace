import { Text, TouchableOpacity, View } from "react-native"
import { Tag, ArrowRight } from "phosphor-react-native";
import theme from "@theme/index";
import styles from "./styles";

type Props = {
    ads: number;
    myAdsFunctionButton: () => void;
}

const Sell: React.FC<Props> = ({ ads, myAdsFunctionButton }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Seus produtos anunciados para venda
            </Text>
            <View style={styles.content}>
                <View style={styles.activityBox}>
                    <Tag
                        color={theme.COLORS.PRODUCT.BLUE}
                        style={styles.tagIcon}
                    />
                    <View>
                        <Text style={styles.numberTitle}>
                            {ads}
                        </Text>
                        <Text style={styles.subtitle}>
                            anúncios ativos
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.myAdsButton} onPress={myAdsFunctionButton}>
                    <Text style={styles.myAdsTitle}>
                        Meus anúncios
                    </Text>
                    <ArrowRight
                        color={theme.COLORS.PRODUCT.BLUE}
                        style={styles.arrowIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Sell;