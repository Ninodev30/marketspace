import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, PADDING, SCALE } = theme;

const photoSize: number = SCALE.WIDTH(28);
const conditionButtonSize: number = 20;
const inputHeight: number = SCALE.HEIGHT(10);

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
        top: SCALE.AVERAGE(0.5),
        right: SCALE.AVERAGE(0.5),
        padding: SCALE.AVERAGE(0.4),
        borderRadius: 100,
        backgroundColor: COLORS.BASE.GRAY_200
    },
    aboutContainer: {
        marginBottom: SCALE.HEIGHT(3)
    },
    aboutBox: {
        gap: SCALE.HEIGHT(2),
        marginTop: SCALE.HEIGHT(1)
    },
    input: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.MD,
        height: inputHeight,
        color: COLORS.BASE.GRAY_200,
        textAlignVertical: "top",
    },
    conditionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SCALE.WIDTH(5),
    },
    conditionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SCALE.WIDTH(2)
    },
    conditionTitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.MD,
        color: COLORS.BASE.GRAY_200
    },
    conditionButton: {
        width: conditionButtonSize,
        height: conditionButtonSize,
        borderRadius: conditionButtonSize / 2,
        borderWidth: SCALE.AVERAGE(0.3)
    },
    conditionButtonSelected: {
        borderColor: COLORS.BASE.GRAY_400
    },
    conditionButtonUnselected: {
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT,
        borderColor: COLORS.PRODUCT.BLUE_LIGHT,
    },
    saleBox: {
        gap: SCALE.HEIGHT(1)
    },
    priceBox: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingLeft: SCALE.WIDTH(2),
        backgroundColor: COLORS.BASE.GRAY_700
    },
    priceCoin: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.MD,
        color: COLORS.BASE.GRAY_100,
        paddingTop: SCALE.HEIGHT(1.4)
    },
    priceInput: {
        width: '250%'
    },
    switchBox: {
        alignItems: 'flex-start',
        gap: SCALE.HEIGHT(1),
        marginTop: SCALE.HEIGHT(2)
    },
    footer: {
        gap: theme.SCALE.WIDTH(3)
    }
});