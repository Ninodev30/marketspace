import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS, FONTS, HEIGHT, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600,
        padding: PADDING.LG,
        alignItems: 'center',
    },
    headerBox: {
        height: HEIGHT * 0.16,
        marginBottom: HEIGHT * 0.04,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    highlightBox: {
        alignItems: 'center',
    },
    scrollBox: {
        alignSelf: 'stretch'
    },
    userBox: {
        width: HEIGHT * 0.11,
        height: HEIGHT * 0.11,
        borderRadius: HEIGHT,
        marginBottom: 10,
        backgroundColor: COLORS.BASE.GRAY_500,
        borderColor: COLORS.PRODUCT.BLUE_LIGHT,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pencilBox: {
        position: 'absolute',
        bottom: -7,
        right: -7,
        padding: 10,
        borderRadius: HEIGHT,
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT,
    },
    inputBox: {
        alignSelf: 'stretch'
    },
    formBox: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    loginBox: {
        marginTop: HEIGHT * 0.05,
        alignSelf: 'stretch'
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.LG,
        color: COLORS.BASE.GRAY_100,
        marginBottom: HEIGHT * 0.01,
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        textAlign: 'center'
    }
});