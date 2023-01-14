import { object, string, ref } from 'yup';

const phoneRegExp: RegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default object({
    name: string()
        .required('Informe o nome'),
    email: string()
        .required('Informe o email')
        .email('E-mail inválido'),
    phone: string()
        .required('Informe o número de telefone')
        .matches(phoneRegExp, 'Número de telefone inválido'),
    password: string()
        .required('Informe a senha')
        .min(6, 'A senha deve ter no mónimo 6 digitos'),
    confirm_password: string()
        .required('Informe a confirmação de senha')
        .oneOf([ref('password'), null], 'As senhas são diferentes')
});