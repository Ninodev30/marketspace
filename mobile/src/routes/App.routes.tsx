import { Platform, TouchableOpacity } from "react-native";
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
    const { COLORS, SCALE } = theme;
    const iconSize: number = SCALE.AVERAGE(4);
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
                    height: Platform.OS === 'android' ? 'auto' : SCALE.HEIGHT(9),
                    paddingTop: SCALE.HEIGHT(4),
                    paddingBottom: SCALE.HEIGHT(5),
                    alignItems: 'center',
                    justifyContent: 'center'
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
                    tabBarIcon: () => (
                        <TouchableOpacity
                            style={{ marginBottom: SCALE.HEIGHT(3) }}
                            onPress={() => console.log('testing')}
                        >
                            <SignOut
                                weight="bold"
                                color={COLORS.PRODUCT.RED}
                                size={iconSize}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Screen
                name='createAd'
                component={CreateAd}
                options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Screen
                name='editAd'
                component={EditAd}
                options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Screen
                name='adDetails'
                component={AdDetails}
                options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Screen
                name='myAdDetails'
                component={MyAdDetails}
                options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Screen
                name='myAdPreview'
                component={MyAdPreview}
                options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                }}
            />
        </Navigator>
    );
};

export default AppRoutes;