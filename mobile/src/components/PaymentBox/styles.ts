import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE } = theme;
const paymentButtonSize: number = SCALE.AVERAGE(3.2);

export default StyleSheet.create({
    paymentBox: {
        marginTop: SCALE.HEIGHT(3),
        marginBottom: SCALE.HEIGHT(8),
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        marginBottom: SCALE.HEIGHT(1.5)
    },
    paymentMethodBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SCALE.HEIGHT(0.7)
    },
    paymentMethodTitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.MD,
        color: COLORS.BASE.GRAY_200
    },
    paymentButton: {
        width: paymentButtonSize,
        height: paymentButtonSize,
        marginRight: SCALE.WIDTH(2),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentButtonSelected: {
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT
    },
    paymentButtonUnselected: {
        borderWidth: 1,
        borderColor: COLORS.BASE.GRAY_400
    }
});