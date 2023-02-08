import { Asset } from "react-native-image-picker";
import PhotoFileProps from "src/@types/photoFile";

type Props = (photo: Asset, userName: string) => PhotoFileProps;

const AssetToPhotoFile: Props = (photo, userName) => {
    const fileExtension = photo.uri!.split('.').pop();

    console.log(photo.fileName)
    console.log(photo)

    // const photoFile: PhotoFileProps = {
    //     uri: photo.uri!,
    //     type: photo.type!,
    //     name: `${userName}.${fileExtension}`.toLowerCase()
    // };

    const photoFile: PhotoFileProps = {
        uri: "/dev/sda/abc.png",
        type: "image/png",
        name: "abc.png",
    };

    return photoFile;
};

export default AssetToPhotoFile;