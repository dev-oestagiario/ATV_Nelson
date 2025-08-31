import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividades</Text>

      <Card
        title="Ex01 — Saudação com Props"
        description='Exibe “Olá, {name}!” com tamanho configurável.'
        onPress={() => navigation.navigate("Ex01")}
      />

      <Card
        title="Ex02 — Contador"
        description='Botões “+1” e “-1” com valor no centro.'
        onPress={() => navigation.navigate("Ex02")}
      />

      <Card
        title="Ex03 — Alinhamentos"
        description="Explorar justifyContent e alignItems."
        onPress={() => navigation.navigate("Ex03")}
      />

      <Card
        title="Ex04 — Tamanhos"
        description="Comparar tamanhos fixos e dinâmicos."
        onPress={() => navigation.navigate("Ex04")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
