import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import useAppSelector from '@hooks/useAppSelector';
import Loading from '@components/Loading';
import theme from '@theme/index';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';
import useAppDispatch from '@hooks/useAppDispatch';
import { userAndTokenData } from '@features/auth';
import { useEffect } from 'react';

const Routes: React.FC = () => {
    const dispatch = useAppDispatch();
    const { appIsLoading, auth } = useAppSelector(state => state);

    const isLoading: boolean = appIsLoading.value;
    const isLoggedUser: boolean = !!auth.user?.id;

    const bgColor: string = theme.COLORS.BASE.GRAY_600;
    DefaultTheme.colors.background = bgColor;

    useEffect(() => {
        const fetchAuth = async () => {
            try {
                await dispatch(userAndTokenData.load());
            }
            catch (error) {
                console.log(error);
            }
        };

        fetchAuth();
    }, [])

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