import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE, PADDING } = theme;

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
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    }
});