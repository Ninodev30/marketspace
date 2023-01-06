import { Image, Text, View } from 'react-native';
import { Plus } from 'phosphor-react-native';
import styles from './styles';
import Button from '@components/Button';
import theme from '@theme/index';

type Props = {
    userName: string;
    userPhoto: string;
    adFunctionButton: () => void;
}

const Header: React.FC<Props> = ({ userName, userPhoto, adFunctionButton }) => {
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
                onPress={adFunctionButton}
            >
                <Plus
                    size={16}
                    color={theme.COLORS.BASE.GRAY_600}
                />
            </Button>
        </View>
    )
}

export default Header;