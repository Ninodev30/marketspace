import { RouteProp, useRoute } from "@react-navigation/native";
import { AppRoutes } from "src/routes/App.routes";

type RootRouteProps<RouteName extends keyof AppRoutes> = RouteProp<
    AppRoutes,
    RouteName
>;

type RouteNames =
    'home' |
    'myAds' |
    'logout' |
    'adDetails' |
    'createAd' |
    'editAd' |
    'myAdDetails' |
    'myAdPreview'
    ;

const useAppRoutes = (route: RouteNames) => useRoute<RootRouteProps<typeof route>>();

export default useAppRoutes;