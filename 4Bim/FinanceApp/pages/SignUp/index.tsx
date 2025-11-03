import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
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
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    console.log("handleSignUp chamado");
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

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
              onChangeText={setName}
              autoCapitalize="words"
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Seu email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="go"
              onSubmitEditing={handleSignUp}
            />
          </AreaInput>

          <SubmitButton
            activeOpacity={0.8}
            disabled={
              loading || !name.trim() || !email.trim() || !password.trim()
            }
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
