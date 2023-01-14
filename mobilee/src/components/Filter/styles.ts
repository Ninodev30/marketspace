import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE, PADDING } = theme;
const paymentButtonSize: number = SCALE.AVERAGE(3.2);

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 582,
        width: '100%',
        padding: PADDING.SM,
        borderRadius: SCALE.AVERAGE(2),
        backgroundColor: COLORS.BASE.GRAY_600
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SCALE.HEIGHT(2)
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
        marginBottom: SCALE.HEIGHT(1.5)
    },
    conditionBox: {
        marginVertical: SCALE.HEIGHT(3)
    },
    conditionButtonsBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    exchangeBox: {
        alignItems: 'flex-start',
        marginVertical: SCALE.HEIGHT(1)
    },
    paymentBox: {
        marginTop: SCALE.HEIGHT(3),
        marginBottom: SCALE.HEIGHT(8),
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
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    }
});