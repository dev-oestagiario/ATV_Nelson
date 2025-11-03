import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  ErrorText,
} from "./styles";

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type SignUpProps = {
  navigation: StackNavigationProp<AuthStackParamList, "SignUp">;
};

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleNameChange = (text: string) => {
    setName(text);
    setErrors((prev) => ({
      ...prev,
      name:
        !text.trim()
          ? "O nome é obrigatório"
          : text.trim().length < 3
          ? "O nome deve ter no mínimo 3 caracteres"
          : "",
    }));
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prev) => ({
      ...prev,
      email:
        !text.trim()
          ? "O email é obrigatório"
          : !emailRegex.test(text)
          ? "Email inválido"
          : "",
    }));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setErrors((prev) => ({
      ...prev,
      password:
        !text
          ? "A senha é obrigatória"
          : text.length < 6
          ? "A senha deve ter no mínimo 6 caracteres"
          : "",
      confirmPassword:
        confirmPassword && text !== confirmPassword
          ? "As senhas não coincidem"
          : prev.confirmPassword,
    }));
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setErrors((prev) => ({
      ...prev,
      confirmPassword:
        !text
          ? "Confirme a senha"
          : text !== password
          ? "As senhas não coincidem"
          : "",
    }));
  };

  const handleSignUp = async () => {
    if (Object.values(errors).some((e) => e !== "")) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.goBack();
    } catch {
      Alert.alert("Erro", "Não foi possível realizar o cadastro.");
    } finally {
      setLoading(false);
    }
  };

  const isFormInvalid =
    !name.trim() ||
    !email.trim() ||
    !password ||
    !confirmPassword ||
    Object.values(errors).some((e) => e !== "");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <Background>
        <Container>
          <AreaInput>
            <Input
              placeholder="Nome"
              autoCorrect={false}
              returnKeyType="next"
              value={name}
              onChangeText={handleNameChange}
              autoCapitalize="words"
            />
            {errors.name ? <ErrorText>{errors.name}</ErrorText> : null}
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Seu email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
            {errors.email ? <ErrorText>{errors.email}</ErrorText> : null}
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Senha"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
            {errors.password ? <ErrorText>{errors.password}</ErrorText> : null}
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="go"
              onSubmitEditing={handleSignUp}
            />
            {errors.confirmPassword ? (
              <ErrorText>{errors.confirmPassword}</ErrorText>
            ) : null}
          </AreaInput>

          <SubmitButton
            activeOpacity={0.8}
            disabled={loading || isFormInvalid}
            onPress={handleSignUp}
          >
            <SubmitText>{loading ? "Cadastrando..." : "Cadastrar"}</SubmitText>
          </SubmitButton>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
