import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import useAppSelector from '@hooks/useAppSelector';
import Loading from '@components/Loading';
import theme from '@theme/index';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';

const Routes: React.FC = () => {
    const { appIsLoading, auth } = useAppSelector(state => state);

    const isLoading: boolean = appIsLoading.value;
    const isLoggedUser: boolean = !!auth.user?.id;

    const bgColor: string = theme.COLORS.BASE.GRAY_600;
    DefaultTheme.colors.background = bgColor;

    if (isLoading)
        return <Loading />;

    return (
        <View style={{ flex: 1, backgroundColor: bgColor }}>
            <NavigationContainer theme={DefaultTheme}>
                {isLoggedUser ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </View>
    );
};

export default Routes;