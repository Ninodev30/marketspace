import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, PADDING, SCALE } = theme;
const userPhotoSize: number = SCALE.AVERAGE(4.2);

export default StyleSheet.create({
    container: {
        padding: PADDING.SM,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userPhoto: {
        height: userPhotoSize,
        width: userPhotoSize,
        borderRadius: userPhotoSize / 2
    },
    userName: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize:  FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_100,
        marginLeft: SCALE.WIDTH(1)
    },
    infoBox: {
        marginVertical: SCALE.HEIGHT(2.5),
    },
    infoBoxHeader: {
        marginVertical: SCALE.HEIGHT(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    usedText: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize:  FONTS.SIZES.XXS,
        color: COLORS.BASE.GRAY_200,
        paddingHorizontal: SCALE.WIDTH(2),
        paddingVertical: SCALE.HEIGHT(0.5),
        backgroundColor: COLORS.BASE.GRAY_500,
        borderRadius: SCALE.AVERAGE(2),
        alignSelf: 'baseline',
        textTransform: 'uppercase'
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize:  FONTS.SIZES.LG,
        color: COLORS.BASE.GRAY_100,
    },
    priceBox: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    priceText: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize:  FONTS.SIZES.LG,
        color: COLORS.PRODUCT.BLUE_LIGHT,
        marginLeft: SCALE.WIDTH(1)
    },
    coin: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize:  FONTS.SIZES.XS,
        color: COLORS.PRODUCT.BLUE_LIGHT,
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize:  FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        textAlign: 'justify'
    },
    tradeBox: {
        marginVertical: SCALE.HEIGHT(1),
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    minititle: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize:  FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        marginRight: SCALE.WIDTH(1.5),
        marginBottom: SCALE.HEIGHT(1)
    },
    paymentBox: {
        marginVertical: SCALE.HEIGHT(1),
    }
});