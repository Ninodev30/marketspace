import { ScrollView, Switch, Text, TouchableOpacity, View, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { Plus, X } from "phosphor-react-native";
import { AppNavigatorRoutesProps } from "src/routes/App.routes";
import useAuth from "@hooks/useAuth";
import Header from "@components/Header";
import PaymentBox from "@components/PaymentBox";
import Input from "@components/Input";
import Button from "@components/Button";
import Footer from "@components/Footer";
import theme from "@theme/index";
import styles, { iconsTheme } from "./styles";

type Props = {
    title: string;
};

const AdComponent: React.FC<Props> = ({ title }) => {
    const { adData, methods: { handleAdData: { trade, photo } } } = useAuth();
    const { navigate, goBack } = useNavigation<AppNavigatorRoutesProps>();

    const photoTest: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sFYCSH51fxxrIJ6xusuCyzrMLSO-4_RRtg&usqp=CAU';

    const renderAdPhoto = (index: number) => adData.adPhotos!![index] && (
        <View>
            <Image
                source={{ uri: adData.adPhotos![index] }}
                style={styles.image}
            />
            <TouchableOpacity style={styles.closeImageIcon} onPress={() => photo.remove(index)}>
                <X
                    color={iconsTheme.close.color}
                    size={iconsTheme.close.size}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <Header
                    title={title}
                    backIcon={true}
                />
                <View style={styles.imagesContainer}>
                    <Text style={styles.title}>
                        Imagens
                    </Text>
                    <Text style={styles.subtitle}>
                        Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
                    </Text>
                    <View style={styles.imagesContainer}>
                        <View style={styles.imagesBox}>
                            {renderAdPhoto(0)}
                            {renderAdPhoto(1)}
                            {renderAdPhoto(2)}
                            {adData.adPhotos?.length !== 3 &&
                                <TouchableOpacity style={[styles.image, styles.emptyImage]} onPress={() => photo.add(photoTest)}>
                                    <Plus
                                        color={iconsTheme.plus.color}
                                        size={iconsTheme.plus.size}
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
                    onPress={goBack}
                />
                <Button
                    bgColor={theme.COLORS.BASE.GRAY_100}
                    title='Avançar'
                    type='LIGHT'
                    onPress={() => navigate('myAdPreview')}
                />
            </Footer>
        </View>
    );
};

export default AdComponent;