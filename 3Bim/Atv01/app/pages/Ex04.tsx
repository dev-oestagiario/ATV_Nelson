import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

// Pega largura da tela
const screenWidth = Dimensions.get("window").width;

export default function Ex04() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ex04 — Tamanhos Fixos vs Dinâmicos</Text>

      {/* Seção A: tamanhos fixos */}
      <Text style={styles.subtitle}>Seção A: Tamanhos Fixos</Text>
      <View style={styles.fixedContainer}>
        <TouchableOpacity style={styles.fixedBox}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fixedBox}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fixedBox}>
          <Text>3</Text>
        </TouchableOpacity>
      </View>

      {/* Seção B: tamanhos dinâmicos */}
      <Text style={styles.subtitle}>
        Seção B: Tamanho Dinâmico / Responsivo
      </Text>
      <Image
        source={{ uri: "https://www.pudim.com.br/pudim.jpg" }}
        style={{
          width: screenWidth - 40,
          height: ((screenWidth - 40) * 300) / 600,
          marginVertical: 10,
        }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
  },
  fixedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  fixedBox: {
    width: 60,
    height: 60,
    backgroundColor: "#f2a154",
    justifyContent: "center",
    alignItems: "center",
  },
});
