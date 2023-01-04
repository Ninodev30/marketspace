import { Text, View } from 'react-native';
import Input from '@components/Input';
import styles from './styles';

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                React Native
            </Text>
            <Input />
        </View>
    )
}

export default Home;