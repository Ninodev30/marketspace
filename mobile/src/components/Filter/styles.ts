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
    title: {

    },
    conditionBox: {

    },
    conditionTitle: {

    },
    exchangeBox: {

    },
    exchangeTitle: {

    },
    paymentBox: {

    },
    paymentTitle: {

    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    }
});