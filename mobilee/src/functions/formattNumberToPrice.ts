type FunctionProps = (value: number) => string;

const formattNumberToPrice: FunctionProps = (value) => {
    const priceFormatted: string = value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return priceFormatted;
};

export default formattNumberToPrice;