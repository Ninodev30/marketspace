import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS, FONTS, /*SCALE,*/ PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600,
        padding: PADDING.LG,
        alignItems: 'center',
    },
    headerBox: {
        // height: SCALE.HEIGHT(16),
        // marginBottom: SCALE.HEIGHT(4),
        height: 180,
        marginBottom: 45,
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
        // width: HEIGHT * 0.11,
        // height: HEIGHT * 0.11,
        // width: SCALE.AVERAGE(17),
        // height: SCALE.AVERAGE(17),
        // borderRadius: SCALE.HEIGHT(100),
        width: 180,
        height: 180,
        borderRadius: 90,
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
        // borderRadius: SCALE.HEIGHT(100),
        borderRadius: 800,
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
        // marginTop: SCALE.HEIGHT(5),
        marginTop: 200,
        alignSelf: 'stretch'
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.LG,
        color: COLORS.BASE.GRAY_100,
        // marginBottom: SCALE.HEIGHT(1),
        marginBottom: 8,
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        textAlign: 'center'
    }
});