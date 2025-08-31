import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
type CardProps = {
  title: string;
  description: string;
  onPress: () => void;
};


function Card({ title, description, onPress }: CardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: "#555",
  },
});

export default Card;
