import { Pressable, ScrollView, Switch, Text, View } from "react-native"
import { Plus } from "phosphor-react-native";
import Header from "@components/Header";
import styles from "./styles";
import Input from "@components/Input";
import PaymentBox from "@components/PaymentBox";
import useAuth from "@hooks/useAuth";

const CreateAd: React.FC = () => {
    const { adData } = useAuth();

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <Header title='Criar anúncio' backIcon />
                <View>
                    <Text>

                    </Text>
                    <Text>

                    </Text>
                    <View>
                        <View>
                            <Plus

                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Text>

                    </Text>
                    <Input

                    />
                    <Input

                    />
                    <View>
                        <View>
                            <Pressable

                            />
                            <Text>

                            </Text>
                        </View>
                        <View>
                            <Pressable

                            />
                            <Text>

                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>

                    </Text>
                    <Input

                    />
                    <View>
                        <Text>

                        </Text>
                        <Switch

                        />
                    </View>

                </View>
                <PaymentBox
                    data={adData.ad.payment}
                    isToTheFilter={true}
                />
            </ScrollView>
        </View>
    );
};

export default CreateAd;