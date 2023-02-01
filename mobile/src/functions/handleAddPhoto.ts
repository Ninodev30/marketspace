import { Alert } from "react-native";
import { Asset, ImagePickerResponse, launchCamera, launchImageLibrary } from "react-native-image-picker";

const analyzePhoto: (image: Asset, title: string) => Asset | undefined = (image, title) => {
    const limitSizeInMB: number = 5 * 1024 * 1024;  // 5MB
    const isImageSizeUnderLimit: boolean = image.fileSize! < limitSizeInMB;

    if (isImageSizeUnderLimit) {
        Alert.alert(title, 'Escolha uma imagem com tamanho menor que 5MB');
        return undefined;
    };

    return image;
};

const handleAddPhoto: (title: string) => Promise<Asset | undefined> = async (title) => {
    try {
        let image: Asset | undefined;

        Alert.alert(title, 'Adicionar foto', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Tirar foto',
                onPress: async () => {
                    try {
                        const photoSelected: ImagePickerResponse = await launchImageLibrary({
                            mediaType: 'photo',
                        });

                        if (photoSelected.didCancel)
                            return;

                        const imageSelected: Asset = photoSelected.assets![0];
                        const analyzedImage: Asset | undefined = analyzePhoto(imageSelected, title);

                        if (analyzedImage)
                            image = analyzedImage;
                    }
                    catch (error) {
                        throw error;
                    }
                }
            },
            {
                text: 'Acessar galeria',
                onPress: async () => {
                    try {
                        const photoSelected: ImagePickerResponse = await launchCamera({
                            mediaType: 'photo'
                        });

                        if (photoSelected.didCancel)
                            return;

                        const imageSelected: Asset = photoSelected.assets![0];
                        const analyzedImage: Asset | undefined = analyzePhoto(imageSelected, title);

                        if (analyzedImage)
                            image = analyzedImage;
                    }
                    catch (error) {
                        throw error;
                    }
                }
            }
        ]);

        return image;
    }
    catch (error) {
        throw error;
    }
}

export default handleAddPhoto;