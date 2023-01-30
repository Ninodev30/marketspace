import { StyleSheet } from "react-native";
import theme from "@theme/index";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.SCALE.HEIGHT(5.5),
        paddingHorizontal: theme.SCALE.WIDTH(4),
        borderRadius: 5,
    },
    title: {
        fontFamily: theme.FONTS.FAMILY.BOLD,
        fontSize: theme.FONTS.SIZES.SM,
    }
});