import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, PADDING, SCALE } = theme;
const photoSize: number = SCALE.WIDTH(28);

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    content: {
        paddingHorizontal: PADDING.SM,
        paddingVertical: SCALE.HEIGHT(3),
        marginBottom: SCALE.HEIGHT(3),
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.MD,
        color: COLORS.BASE.GRAY_200,
        marginBottom: SCALE.HEIGHT(1)
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_300,
    },
    imagesContainer: {
        marginVertical: SCALE.HEIGHT(2)
    },
    imagesBox: {
        flexDirection: 'row',
        gap: SCALE.WIDTH(2),
        height: photoSize,
        borderRadius: SCALE.AVERAGE(2),
    },
    imageBox: {

    },
    image: {
        borderRadius: SCALE.AVERAGE(1),
        height: photoSize,
        width: photoSize
    },
    emptyImage: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.BASE.GRAY_500
    },
    closeImageIcon: {
        position: 'absolute',
        top: SCALE.AVERAGE(1),
        right: SCALE.AVERAGE(1),
        padding: SCALE.AVERAGE(0.2),
        borderRadius: 100,
        backgroundColor: COLORS.BASE.GRAY_200
    },
    aboutBox: {

    },
    aboutInputBox: {

    },
    input: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.MD,
        color: COLORS.BASE.GRAY_200
    },
    conditionContainer: {

    },
    conditionBox: {

    },
    conditionTitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.MD,
        color: COLORS.BASE.GRAY_200
    },
    conditionButton: {

    },
    conditionButtonSelected: {

    },
    conditionButtonUnselected: {

    },
    saleBox: {

    },
    priceBox: {

    },
    priceCoin: {

    },
    switchBox: {
        alignItems: 'flex-start',
        marginVertical: SCALE.HEIGHT(1)
    },
    footer: {
        gap: theme.SCALE.WIDTH(3)
    }
});