import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux";
import { increment, incrementAmount } from "@features/counter";
import useAppSelector from "@hooks/useAppSelector";
import Footer from "@components/Footer";
import styles from "./styles";

const MyAdPreview: React.FC = () => {
    const test = useAppSelector(state =>
        state.counter.value
    );

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(increment());
    };

    const handleAmount = (amount: number) => {
        dispatch(incrementAmount(amount));
    };

    return (
        <View style={styles.container}>
            <View>

            </View>
            <ScrollView style={styles.content}>
                <Text>
                    {test}
                </Text>
                <Text>
                    test
                </Text>
                <TouchableOpacity onPress={handleOnClick}
                    style={{ padding: 20, backgroundColor: 'gray' }}
                >
                    <Text>
                        Button
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAmount(4)}
                    style={{ padding: 20, backgroundColor: 'red' }}
                >
                    <Text>
                        Button Amount
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <Footer>

            </Footer>
        </View>
    );
};

export default MyAdPreview;