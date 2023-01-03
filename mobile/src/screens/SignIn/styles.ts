import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, HEIGHT, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.BASE.GRAY_700
    },
    content: {
        height: HEIGHT * 0.8,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: PADDING.LG,
        borderRadius: 15,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    headerBox: {
        alignItems: 'center',
        marginTop: HEIGHT * 0.06,
        marginBottom: HEIGHT * 0.13,
    },
    highLightBox: {
        alignItems: 'center'
    },
    inputBox: {
        alignSelf: 'stretch',
    },
    newAccountBox: {
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: HEIGHT * 0.07,
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
        marginBottom: 15,
    }
});