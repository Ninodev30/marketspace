import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';
import { AppNavigatorRoutesProps } from 'src/routes/App.routes';
import Button from '@components/Button';
import theme from '@theme/index';
import styles from './styles';
import useAppSelector from '@hooks/useAppSelector';
import api from '@services/api.';

type Props = {
    userName: string;
    userPhoto: string;
}

const HomeHeader: React.FC<Props> = () => {
    const { name, avatar } = useAppSelector(state => state.user);
    const { navigate } = useNavigation<AppNavigatorRoutesProps>();

    const photo: string = `${api.defaults.baseURL}/avatar/${avatar}`
    console.log(avatar)
    const photoo: string = 'https://github.com/Ninodev30.png'

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={{ uri: avatar }}
                    style={styles.userPhoto}
                />
                <View style={styles.titleBox}>
                    <Text style={styles.subtitle}>
                        Boas vindas,
                    </Text>
                    <Text style={styles.title}>
                        {name}
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