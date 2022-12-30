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
        height: HEIGHT * 0.16,
        marginTop: HEIGHT * 0.06,
        marginBottom: HEIGHT * 0.1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    highLightBox: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputBox: {
        alignSelf: 'stretch',
        height: HEIGHT * 0.25,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    newAccountBox: {
        alignSelf: 'stretch',
        height: HEIGHT * 0.25,
        marginHorizontal: PADDING.LG,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.XL,
        color: COLORS.BASE.GRAY_100
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_300
    },
    titleAccount: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200
    }
});