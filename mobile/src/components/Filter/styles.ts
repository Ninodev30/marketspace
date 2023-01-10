import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE, PADDING } = theme;
const paymentButtonSize: number = SCALE.AVERAGE(3.2);

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: PADDING.SM,
        borderRadius: SCALE.AVERAGE(2),
        backgroundColor: COLORS.BASE.GRAY_600
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.LG,
        color: COLORS.BASE.GRAY_100
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        marginBottom: SCALE.HEIGHT(1)
    },
    conditionBox: {

    },
    exchangeBox: {

    },
    paymentBox: {
        marginVertical: SCALE.HEIGHT(5)
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
        borderRadius: 5,
        marginRight: SCALE.WIDTH(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected: {
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT
    },
    unselected: {
        borderWidth: 1,
        borderColor: COLORS.BASE.GRAY_400
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    }
});