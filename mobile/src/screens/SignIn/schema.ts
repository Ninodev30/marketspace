import { object, string } from 'yup';

export default object({
    email: string()
        .required('Informe o email')
        .email('E-mail inválido'),

    password: string()
        .required('Informe a senha')
        .min(6, 'A senha deve ter no mónimo 6 digitos'),
});