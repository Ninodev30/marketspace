import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { House, Tag, SignOut } from 'phosphor-react-native';
import Home from "@screens/app/Home";
import MyAds from "@screens/app/MyAds";
import CreateAd from "@screens/app/CreateAd";
import EditAd from "@screens/app/EditAd";
import AdDetails from "@screens/app/AdDetails";
import MyAdDetails from "@screens/app/MyAdDetails";
import MyAdPreview from "@screens/app/MyAdPreview";
import theme from "@theme/index";
import { Platform, TouchableOpacity } from "react-native";

type AppRoutes = {
    home: undefined;
    myAds: undefined;
    logout: undefined;
    adDetails: undefined;
    createAd: undefined;
    editAd: undefined;
    myAdDetails: undefined;
    myAdPreview: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

const AppRoutes: React.FC = () => {
    const { COLORS, HEIGHT } = theme;
    const iconSize: number = HEIGHT * 0.03;
    const Logout: React.FC = () => null;

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.BASE.GRAY_200,
                tabBarInactiveTintColor: COLORS.BASE.GRAY_400,
                tabBarStyle: {
                    backgroundColor: COLORS.BASE.GRAY_700,
                    borderTopWidth: 0,
                    height: Platform.OS === 'android' ? 'auto' : 72,
                    paddingTop: HEIGHT * 0.04,
                    paddingBottom: HEIGHT * 0.05
                }
            }}
        >
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <House
                            weight="bold"
                            color={color}
                            size={iconSize}
                        />
                    )
                }}
            />
            <Screen
                name='myAds'
                component={MyAds}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Tag
                            weight="bold"
                            color={color}
                            size={iconSize}
                        />
                    )
                }}
            />
            <Screen
                name='logout'
                component={Logout}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TouchableOpacity
                            style={{ marginBottom: HEIGHT * 0.03 }}
                            onPress={() => console.log('testing')}
                        >
                            <SignOut
                                weight="bold"
                                color={color}
                                size={iconSize}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Screen
                name='createAd'
                component={CreateAd}
                options={{ tabBarButton: () => null }}
            />
            <Screen
                name='editAd'
                component={EditAd}
                options={{ tabBarButton: () => null }}
            />
            <Screen
                name='adDetails'
                component={AdDetails}
                options={{ tabBarButton: () => null }}
            />
            <Screen
                name='myAdDetails'
                component={MyAdDetails}
                options={{ tabBarButton: () => null }}
            />
            <Screen
                name='myAdPreview'
                component={MyAdPreview}
                options={{ tabBarButton: () => null }}
            />
        </Navigator>
    );
};

export default AppRoutes;