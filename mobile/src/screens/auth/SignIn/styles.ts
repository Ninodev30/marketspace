import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.BASE.GRAY_700
    },
    content: {
        height: SCALE.HEIGHT(80),
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: PADDING.LG,
        borderRadius: SCALE.AVERAGE(5),
        backgroundColor: COLORS.BASE.GRAY_600
    },
    headerBox: {
        alignItems: 'center',
        marginTop: SCALE.HEIGHT(6),
        marginBottom: SCALE.HEIGHT(15),
    },
    highLightBox: {
        alignItems: 'center'
    },
    inputBox: {
        alignSelf: 'stretch',
    },
    input: {
        marginBottom: SCALE.HEIGHT(2)
    },
    newAccountBox: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flex: 1,
        marginTop: SCALE.HEIGHT(7),
        marginHorizontal: PADDING.LG,
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.XL,
        color: COLORS.BASE.GRAY_100
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_300,
        textAlign: 'center'
    },
    titleAccount: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        textAlign: 'center',
        marginBottom: SCALE.HEIGHT(2),
    }
});