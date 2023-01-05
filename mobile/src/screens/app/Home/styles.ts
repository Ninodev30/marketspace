import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, /*SCALE,*/ PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: PADDING.SM,
        backgroundColor: COLORS.BASE.GRAY_700
    },
    title: {
        fontSize: theme.FONTS.SIZES.XL,
        fontFamily: theme.FONTS.FAMILY.REGULAR,
        color: theme.COLORS.BASE.GRAY_200
    }
});