import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS, FONTS, SCALE, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    content: {
        paddingBottom: SCALE.HEIGHT(3),
        marginBottom: SCALE.HEIGHT(3),
    },
    header: {
        flexDirection: 'row',
        paddingTop: SCALE.HEIGHT(8),
        paddingBottom: SCALE.HEIGHT(2),
        paddingHorizontal: PADDING.SM
    },
    adPhoto: {
        height: SCALE.HEIGHT(37),
    },
    footerContent: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    footerCoin: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.PRODUCT.BLUE
    },
    footerPrice: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.XL,
        color: COLORS.PRODUCT.BLUE,
        marginLeft: SCALE.WIDTH(1)
    }
});