import React from "react";
import { FaRegEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";

import * as yup from "yup";
import { useFormik } from "formik";

// import Form from "../../components/Form/FormLogin";

import {
  Container,
  ContainerImage,
  Image,
  ContainerLogon,
  Logon,
  Logo,
  Text,
  Email,
  // EmailInput,
  Password,
  // PasswordInput,
  Submit,
  Form,
} from "./styles";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // // const [erros, setErrors] = useState([]);

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   // let currentErros = [];
  //   // if (!email) {
  //   //   currentErros = [...currentErros, "campo de email obrigatorio"];
  //   // }
  //   // if (!password) {
  //   //   currentErros = [...currentErros, "campo de senha obrigatorio"];
  //   // }
  //   // setErrors(currentErros);
  // }
  const history = useNavigate()

  const formik = useFormik({
    initialValues: {
      // nome: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      // nome: yup.string().required("O campo é obrigatório."),
      email: yup
        .string()
        .email("E-mail inválido.")
        .required("O campo é obrigatório."),
      password: yup
        .string()
        .required("O campo é obrigatório.")
        .min(8, "Senha muito curta deve ter no minimo 8 digitos"),
      // .positive("O campo deve ser positivo.")
      // .integer("O campo deve ser um número inteiro."),
    }),
    onSubmit: () => {
      // alert(JSON.stringify(values, null, 2));
      alert("Logado")
      history('/dashboard')
      
    },
  });

  return (
    <Container>
      <ContainerImage>
        <Image></Image>
      </ContainerImage>
      <ContainerLogon>
        <Logon>
          <Logo></Logo>
          <Text>Seja bem vindo</Text>

          <Form onSubmit={formik.handleSubmit}>
            {/* {erros.map(item => <p>{item}</p>)} */}

            <Email>
              <FaRegEnvelope className="envelope-icon" />
              <Input
                // type="email"
                // value={email}
                // onChange={(event) => {
                //   setEmail(event.target.value);
                // }}
                placeholder="E-mail"
                // id="nome"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              ></Input>
            </Email>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <Password>
              <FaLock className="lock-icon" />
              <Input
                // type="password"
                // value={password}
                // onChange={(event) => {
                //   setPassword(event.target.value);
                // }}
                placeholder="Senha"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              ></Input>
            </Password>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <Submit type="submit">Entrar</Submit>

            <Link to="/dashboard" className="submit"></Link>
          </Form>
        </Logon>
      </ContainerLogon>
    </Container>
  );
}

export default Login;
