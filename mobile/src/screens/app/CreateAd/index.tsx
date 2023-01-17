import Header from "@components/Header";
import { ScrollView, View } from "react-native"
import styles from "./styles";

const CreateAd: React.FC = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <Header title='Criar anúncio' backIcon />
            </ScrollView>
        </View>
    );
};

export default CreateAd;