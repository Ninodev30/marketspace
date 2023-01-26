import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS, FONTS, PADDING, SCALE } = theme;

export const iconsTheme = {
    size: SCALE.AVERAGE(3.2),
    color: {
        arrow: COLORS.BASE.GRAY_200,
        tag: COLORS.BASE.GRAY_600
    }
};

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
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: SCALE.HEIGHT(2.5),
        gap: SCALE.HEIGHT(0.7),
        height: SCALE.HEIGHT(16),
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT
    },
    image: {
        height: SCALE.HEIGHT(37.2),
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