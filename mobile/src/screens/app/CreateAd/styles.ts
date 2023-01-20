import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, PADDING, SCALE } = theme;

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

    },
    subtitle: {

    },
    imagesContainer: {

    },
    imagesBox: {

    },
    image: {
        height: 120,
        width: 140
    },
    emptyImage: {

    },
    closeImageIcon: {

    },
    aboutBox: {

    },
    aboutInputBox: {

    },
    input: {

    },
    conditionContainer: {

    },
    conditionBox: {

    },
    conditionTitle: {

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