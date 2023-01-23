import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE } = theme;

export default StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    input: {
        alignSelf: 'stretch',
        padding: SCALE.AVERAGE(1.8),
        borderRadius: SCALE.AVERAGE(0.9),
        backgroundColor: COLORS.BASE.GRAY_700,
        color: COLORS.BASE.GRAY_400,
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.MD,
    },
    errorMessage: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.PRODUCT.RED,
        marginBottom: SCALE.AVERAGE(0.9)
    }
});