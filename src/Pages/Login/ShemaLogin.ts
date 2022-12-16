import * as Yup from "yup";

export const formShemaLogin = Yup.object().shape({
  email: Yup.string().email().required("Nome é obrigatório"),
  password: Yup.string()
    .required("Senha obrigatória")
    .min(6, "Deve ter no minimo 6 caracteres")
    /* .matches(/(?=.*?[A-Z])/, "Senha precisa de alguma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Senha precisa de alguma letra minúscula")
    .matches(/(?=.*?[0-9])/, "A senha precisa conter algum número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha precisa conter algum caracter especial"
    ) */
    .matches(/.{6,}/, "A senha precisa conter no mínimo 8 caracteres"),
});
