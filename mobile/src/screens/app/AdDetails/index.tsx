import { View } from "react-native"
import BackIcon from "@components/BackIcon";
import styles from "./styles";

const AdDetails: React.FC = () => {
    return (
        <View style={styles.container}>
            <BackIcon style={styles.header} />
        </View>
    );
};

export default AdDetails;