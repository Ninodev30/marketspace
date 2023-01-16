import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';
import { AppNavigatorRoutesProps } from 'src/routes/App.routes';
import Button from '@components/Button';
import theme from '@theme/index';
import styles from './styles';

type Props = {
    userName: string;
    userPhoto: string;
}

const HomeHeader: React.FC<Props> = ({ userName, userPhoto }) => {
    const { navigate } = useNavigation<AppNavigatorRoutesProps>();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={{ uri: userPhoto }}
                    style={styles.userPhoto}
                />
                <View style={styles.titleBox}>
                    <Text style={styles.subtitle}>
                        Boas vindas,
                    </Text>
                    <Text style={styles.title}>
                        {userName}
                    </Text>
                </View>
            </View>
            <Button
                title='Criar anúncio'
                type='LIGHT'
                bgColor={theme.COLORS.BASE.GRAY_100}
                style={{ width: theme.SCALE.WIDTH(35) }}
                onPress={() => navigate('createAd')}
            >
                <Plus
                    size={16}
                    color={theme.COLORS.BASE.GRAY_600}
                />
            </Button>
        </View>
    )
}

export default HomeHeader;