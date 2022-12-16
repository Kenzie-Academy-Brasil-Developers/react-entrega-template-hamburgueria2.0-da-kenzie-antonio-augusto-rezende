import * as Yup from "yup";

export const formShemaRegister = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email().required("Email obrigatório"),
  password: Yup.string()
    .required("Senha obrigatória")
    .min(8, "Deve ter no maximo 8 caracteres")
    .matches(/(?=.*?[A-Z])/, "Senha precisa de alguma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Senha precisa de alguma letra minúscula")
    .matches(/(?=.*?[0-9])/, "A senha precisa conter algum número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha precisa conter algum caracter especial"
    )
    .matches(/.{8,}/, "A senha precisa conter no mínimo 8 caracteres"),
  confirmPassword: Yup.string()
    .required("Senha de confirmação obrigatória")
    .oneOf([Yup.ref("password"), null], "Senhas não são iguais"),
});
