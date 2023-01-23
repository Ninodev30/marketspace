import { ScrollView, Switch, Text, TouchableOpacity, View, Image } from "react-native"
import { Plus, X } from "phosphor-react-native";
import useAuth from "@hooks/useAuth";
import Header from "@components/Header";
import PaymentBox from "@components/PaymentBox";
import Input from "@components/Input";
import Button from "@components/Button";
import Footer from "@components/Footer";
import theme from "@theme/index";
import styles from "./styles";

const CreateAd: React.FC = () => {
    const { adData, methods: { handleAdData: { trade, photo } } } = useAuth();
    const photoTest: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sFYCSH51fxxrIJ6xusuCyzrMLSO-4_RRtg&usqp=CAU';
    const closeIconSize: number = 12;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <Header title='Criar anúncio' backIcon />
                <View style={styles.imagesContainer}>
                    <Text style={styles.title}>
                        Imagens
                    </Text>
                    <Text style={styles.subtitle}>
                        Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
                    </Text>
                    <View style={styles.imagesContainer}>
                        <View style={styles.imagesBox}>
                            {adData.adPhotos!![0] &&
                                <View style={styles.imageBox}>
                                    <Image
                                        source={{ uri: adData.adPhotos![0] }}
                                        style={styles.image}
                                    />
                                    <TouchableOpacity style={styles.closeImageIcon} onPress={() => photo.remove(0)}>
                                        <X
                                            color={theme.COLORS.BASE.GRAY_700}
                                            size={closeIconSize}
                                        />
                                    </TouchableOpacity>
                                </View>
                            }
                            {
                                adData.adPhotos!![1] &&
                                <View style={styles.imageBox}>
                                    <Image
                                        source={{ uri: adData.adPhotos![1] }}
                                        style={styles.image}
                                    />
                                    <TouchableOpacity style={styles.closeImageIcon} onPress={() => photo.remove(1)}>
                                        <X
                                            color={theme.COLORS.BASE.GRAY_700}
                                            size={closeIconSize}
                                        />
                                    </TouchableOpacity>
                                </View>
                            }
                            {
                                adData.adPhotos!![2] &&
                                <View style={styles.imageBox}>
                                    <Image
                                        source={{ uri: adData.adPhotos![2] }}
                                        style={styles.image}
                                    />
                                    <TouchableOpacity style={styles.closeImageIcon} onPress={() => photo.remove(2)}>
                                        <X
                                            color={theme.COLORS.BASE.GRAY_700}
                                            size={closeIconSize}
                                        />
                                    </TouchableOpacity>
                                </View>
                            }
                            {adData.adPhotos?.length !== 3 &&
                                <TouchableOpacity style={[styles.image, styles.emptyImage]} onPress={() => photo.add(photoTest)}>
                                    <Plus

                                    />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
                <View style={styles.aboutContainer}>
                    <Text style={styles.title}>
                        Sobre o produto
                    </Text>
                    <View style={styles.aboutBox}>
                        <Input
                            style={styles.input}
                            placeholder='Título do anúncio'
                            maxLength={40}
                        />
                        <Input
                            style={styles.input}
                            placeholder='Descrição do anúncio'
                            big
                            multiline
                            numberOfLines={6}
                            maxLength={400}
                        />
                        <View style={styles.conditionContainer}>
                            <View style={styles.conditionBox}>
                                <TouchableOpacity
                                    style={[
                                        styles.conditionButton,
                                        !adData.ad.used ? styles.conditionButtonSelected : styles.conditionButtonUnselected
                                    ]}
                                    onPress={() => trade.condition(true)}
                                />
                                <Text style={styles.conditionTitle}>
                                    Produto novo
                                </Text>
                            </View>
                            <View style={styles.conditionBox}>
                                <TouchableOpacity
                                    style={[
                                        styles.conditionButton,
                                        adData.ad.used ? styles.conditionButtonSelected : styles.conditionButtonUnselected
                                    ]}
                                    onPress={() => trade.condition(false)}
                                />
                                <Text style={styles.conditionTitle}>
                                    Produto usado
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.saleBox}>
                    <Text style={styles.title}>
                        Venda
                    </Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.priceCoin}>
                            R$
                        </Text>
                        <Input
                            style={[styles.input, styles.priceInput]}
                            placeholder='Valor do produto'
                        />
                    </View>
                    <View style={styles.switchBox}>
                        <Text style={styles.title}>
                            Aceita troca?
                        </Text>
                        <Switch
                            thumbColor={theme.COLORS.BASE.GRAY_700}
                            trackColor={{ true: theme.COLORS.PRODUCT.BLUE_LIGHT, false: theme.COLORS.BASE.GRAY_500 }}
                            onValueChange={trade.switch}
                            value={adData.ad.switch}
                        />
                    </View>
                    <PaymentBox
                        data={adData.ad.payment}
                        isToTheFilter={false}
                    />
                </View>
            </ScrollView>
            <Footer style={styles.footer}>
                <Button
                    bgColor={theme.COLORS.BASE.GRAY_500}
                    title='Cancelar'
                    type='DARK'
                />
                <Button
                    bgColor={theme.COLORS.BASE.GRAY_100}
                    title='Avançar'
                    type='LIGHT'
                />
            </Footer>
        </View>
    );
};

export default CreateAd;