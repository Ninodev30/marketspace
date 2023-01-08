import { StyleSheet } from "react-native";
import theme from "@theme/index";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        // alignSelf: 'stretch',
        height: theme.SCALE.HEIGHT(5),
        paddingHorizontal: theme.SCALE.WIDTH(3),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: theme.FONTS.FAMILY.BOLD,
        fontSize: theme.FONTS.SIZES.SM,
    }
});