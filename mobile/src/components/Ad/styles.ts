import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE } = theme;
const userPhotoSize: number = SCALE.HEIGHT(3);

export default StyleSheet.create({
    container: {
        width: SCALE.WIDTH(41),
        height: SCALE.HEIGHT(18),
    },
    topBox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        padding: 2
    },
    photo: {
        flex: 1,
        borderRadius: 6
    },
    userPhoto: {
        height: userPhotoSize,
        width: userPhotoSize,
        borderRadius: userPhotoSize / 2,
        borderColor: COLORS.BASE.GRAY_700,
        borderWidth: 1
    },
    title: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
    },
    moneyBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.MD,
        color: COLORS.BASE.GRAY_100,
    },
    coin: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_100,
        marginRight: 3
    },
    used: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.XXS,
        color: COLORS.BASE.WHITE,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 10
    },
});