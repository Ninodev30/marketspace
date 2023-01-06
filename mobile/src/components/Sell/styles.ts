import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE } = theme;

export default StyleSheet.create({
    container: {
        marginVertical: SCALE.HEIGHT(2),
    },
    content: {
        padding: SCALE.AVERAGE(2),
        marginVertical: SCALE.HEIGHT(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: `${COLORS.PRODUCT.BLUE}10`,
    },
    activityBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: FONTS.SIZES.SM,
        fontFamily: FONTS.FAMILY.REGULAR,
        color: COLORS.BASE.GRAY_300
    },
    numberTitle: {
        fontSize: FONTS.SIZES.LG,
        fontFamily: FONTS.FAMILY.BOLD,
        color: COLORS.BASE.GRAY_200
    },
    subtitle: {
        fontSize: FONTS.SIZES.XS,
        fontFamily: FONTS.FAMILY.REGULAR,
        color: COLORS.BASE.GRAY_200
    },
    myAdsButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    myAdsTitle: {
        fontSize: FONTS.SIZES.XS,
        fontFamily: FONTS.FAMILY.BOLD,
        color: COLORS.PRODUCT.BLUE
    },
    tagIcon: {
        marginRight: SCALE.WIDTH(3)
    },
    arrowIcon: {
        marginLeft: SCALE.WIDTH(2)
    }
});