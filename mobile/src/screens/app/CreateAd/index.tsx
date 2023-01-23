// import { } from "react-native"
import useAuth from "@hooks/useAuth";
import AdComponent from "@components/AdComponent";

const CreateAd: React.FC = () => {
    const { adData, methods: { handleAdData: { trade, photo } } } = useAuth();

    return (
        <AdComponent
            title='Criar anúncio'
        />
    );
};

export default CreateAd;