import { Alert } from "react-native";
import { Asset, ImagePickerResponse, launchCamera, launchImageLibrary } from "react-native-image-picker";

type AddAdPhotoTypeProps = {
    pick: () => Promise<void>;
    take: () => Promise<void>;
    analyze: (image: Asset) => Promise<void>;
};

const AddAdPhoto: AddAdPhotoTypeProps = {
    pick: async () => {
        try {
            const photoSelected: ImagePickerResponse = await launchImageLibrary({
                mediaType: 'photo',
            });

            if (photoSelected.didCancel)
                return;

            AddAdPhoto.analyze(photoSelected.assets![0]);
        }
        catch (error) {
            throw error;
        }
    },
    take: async () => {
        try {
            const photoSelected: ImagePickerResponse = await launchCamera({
                mediaType: 'photo'
            });

            if (photoSelected.didCancel)
                return;

            AddAdPhoto.analyze(photoSelected.assets![0]);
        }
        catch (error) {
            throw error;
        }
    },
    analyze: async (image) => {
        try {
            const limitSizeInMB: number = 5 * 1024 * 1024;  // 5MB
            const isImageSizeUnderLimit: boolean = image.fileSize! < limitSizeInMB;

            if (isImageSizeUnderLimit)
                console.log(image);
        }
        catch (error) {
            throw error;
        }
    }
};

const handleAddPhoto: (title: string) => Promise<void> = async (title) => {
    try {
        Alert.alert(title, 'Adicionar foto', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Tirar foto',
                onPress: async () => await AddAdPhoto.take()
            },
            {
                text: 'Acessar galeria',
                onPress: async () => await AddAdPhoto.pick()
            }
        ])
    }
    catch (error) {
        console.log(error);
    }
}

export default handleAddPhoto;