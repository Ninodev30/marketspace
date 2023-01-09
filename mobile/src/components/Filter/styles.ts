import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: PADDING.SM,
        borderRadius: SCALE.AVERAGE(2),
        backgroundColor: COLORS.BASE.GRAY_700
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
        color: COLORS.BASE.GRAY_200
    },
    conditionBox: {

    },
    exchangeBox: {

    },
    paymentBox: {

    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    }
});