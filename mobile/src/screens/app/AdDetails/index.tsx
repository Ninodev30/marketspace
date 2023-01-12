import { Image, ScrollView, Text, View } from "react-native"
import BackIcon from "@components/BackIcon";
import styles from "./styles";
import AdInfo from "@components/AdInfo";

const AdDetails: React.FC = () => {
    const adPhoto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVh6Nwt0h_u8O-PydwbJNfAy868gDtcycKw&usqp=CAU';

    return (
        <View style={styles.container}>
            <ScrollView>
                <BackIcon style={styles.header} />
                <Image
                    source={{ uri: adPhoto }}
                    resizeMode='cover'
                    style={styles.adPhoto}
                />
                <AdInfo
                    user={{
                        name: 'Makenna Baptista',
                        photo: 'https://github.com/Ninodev30.git'
                    }}
                    ad={{
                        used: true,
                        exchange: true,
                        payment: {
                            ticket: true,
                            pix: true,
                            money: true,
                            creditCard: true,
                            bankDeposit: true,
                        }
                    }}
                    title='Bicicleta'
                    subtitle='Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.'
                    price={120}
                />
            </ScrollView>
        </View>
    );
};

export default AdDetails;