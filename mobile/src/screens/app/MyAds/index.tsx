import { ScrollView, Text, View } from "react-native"
import { Plus } from "phosphor-react-native";
import styles from "./styles";

const MyAds: React.FC = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Meus anúncios
                    </Text>
                    <Plus
                        style={styles.addIcon}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default MyAds;