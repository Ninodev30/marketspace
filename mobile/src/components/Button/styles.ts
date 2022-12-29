import { Dimensions, StyleSheet } from "react-native";

export type ButtonStyleTypeProps = {
    type: 'LIGHT' | 'DARK';
}

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 48,
        height: Dimensions.get('window').height * 0.05
    },
    title: {
        
    }
});