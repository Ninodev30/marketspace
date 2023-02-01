type SignUpBaseTypeProps = {
    name: string;
    email: string;
    phone: string;
    password: string;
};

export type SignUpFormTypeProps = SignUpBaseTypeProps & {
    confirm_password: string;
};

export type SignUpUserTypeProps = SignUpBaseTypeProps & {
    avatar: string;
};