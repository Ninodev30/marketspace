import theme from "@theme/index";

const { COLORS, FONTS, SCALE } = theme

export default {
    container: {
        borderRadius: SCALE.AVERAGE(3),
        marginRight: SCALE.WIDTH(2),
    },
    containerSelected: {
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerUnselected: {
        backgroundColor: COLORS.BASE.GRAY_500
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.XS,
        paddingVertical: SCALE.HEIGHT(1)
    },
    titleSelected: {
        color: COLORS.BASE.WHITE,
        paddingLeft: SCALE.WIDTH(4),
        paddingRight: SCALE.WIDTH(1),
    },
    titleUnselected: {
        color: COLORS.BASE.GRAY_300,
        paddingHorizontal: SCALE.WIDTH(4)
    },
};