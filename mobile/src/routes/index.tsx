import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import theme from '@theme/index';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';
import useAppSelector from '@hooks/useAppSelector';

const Routes: React.FC = () => {
    const isLoggedUser: boolean = useAppSelector(state => !!state.user.id);

    const bgColor: string = theme.COLORS.BASE.GRAY_600;
    DefaultTheme.colors.background = bgColor;

    return (
        <View style={{ flex: 1, backgroundColor: bgColor }}>
            <NavigationContainer theme={DefaultTheme}>
                {isLoggedUser ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </View>
    );
};

export default Routes;