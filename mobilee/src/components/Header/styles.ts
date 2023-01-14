import { StyleSheet } from "react-native"
import theme from "@theme/index";

const { COLORS, FONTS, SCALE } = theme;
const userPhotoSize: number = SCALE.AVERAGE(8);

export default StyleSheet.create({
    container: {
        paddingTop: SCALE.HEIGHT(5),
        paddingBottom: SCALE.HEIGHT(1.2),
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    content: {
        flexDirection: 'row',
    },
    userPhoto: {
        width: userPhotoSize,
        height: userPhotoSize,
        borderRadius: userPhotoSize / 2,
        marginRight: SCALE.WIDTH(3),
        borderWidth: SCALE.AVERAGE(0.3),
        borderColor: COLORS.BASE.GRAY_700
    },
    titleBox: {
        marginRight: SCALE.WIDTH(15),
    },
    title: {
        fontSize: FONTS.SIZES.LG,
        fontFamily: FONTS.FAMILY.BOLD,
        color: COLORS.BASE.GRAY_100
    },
    subtitle: {
        fontSize: FONTS.SIZES.MD,
        fontFamily: FONTS.FAMILY.REGULAR,
        color: COLORS.BASE.GRAY_100
    }
});