import useAuth from "@hooks/useAuth";
import AdComponent from "@components/AdComponent";

const CreateAd: React.FC = () => {
    const { adData, methods: { handleAdData: { trade, photo } } } = useAuth();

    return (
        <AdComponent
            title='Criar anúncio'
            state='CREATE'
        />
    );
};

export default CreateAd;