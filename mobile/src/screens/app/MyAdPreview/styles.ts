import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS, FONTS, PADDING, SCALE } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    content: {
        // flex: 1,
        height: 400
    },
    header: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: SCALE.HEIGHT(2.5),
        gap: SCALE.HEIGHT(0.7),
        height: SCALE.HEIGHT(16),
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT
    },
    image: {
        height: 280,
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.MD,
        color: COLORS.BASE.GRAY_700
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_700
    },
    footer: {
        gap: SCALE.WIDTH(3)
    }
});