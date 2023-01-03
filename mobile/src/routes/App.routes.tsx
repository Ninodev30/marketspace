import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import Home from "@screens/Home";

type AppRoutes = {
    home: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

const AppRoutes: React.FC = () => {
    return (
        <Navigator>
            <Screen
                name='home'
                component={Home}
            />
        </Navigator>
    );
};

export default AppRoutes;