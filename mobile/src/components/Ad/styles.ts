import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, /*SCALE*/ } = theme;
//const userPhotoSize: number = SCALE.HEIGHT(3.5);
const userPhotoSize: number = 25;

export default StyleSheet.create({
    container: {

    },
    topBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    photo: {
        // width: SCALE.WIDTH(40),
        // height: SCALE.HEIGHT(12),
        width: 153,
        height: 100,
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

    },
    price: {

    },
    used: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.XS,
        color: COLORS.BASE.WHITE,
        backgroundColor: COLORS.BASE.GRAY_200,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10
    },
    usedBox: {

    }
});