import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, HEIGHT } = theme;

export default StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    input: {
        alignSelf: 'stretch',
        padding: 10,
        borderRadius: 5,
        height: HEIGHT * 0.06,
        backgroundColor: COLORS.BASE.GRAY_700,
        color: COLORS.BASE.GRAY_400,
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.MD,
    },
    errorMessage: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.PRODUCT.RED,
        marginBottom: 5
    }
});