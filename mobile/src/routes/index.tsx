import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import theme from '@theme/index';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';

const Routes: React.FC = () => {
    const { COLORS: { BASE: { GRAY_700 } } } = theme;

    DefaultTheme.colors.background = GRAY_700;

    return (
        <View style={{ flex: 1, backgroundColor: GRAY_700 }}>
            <NavigationContainer theme={DefaultTheme}>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}

export default Routes;