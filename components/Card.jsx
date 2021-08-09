import * as React from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";

export default function AssetExample({ product }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image
            source={{ uri: product.url }}
            style={{
              height: 160,
              width: 200,
            }}
          />
        </View>
        <View style={{ padding: 10, width: 200 }}>
          <Text>{product.name}</Text>
          <Text style={{ color: "red", paddingTop: 5 }}>{product.price}$</Text>
          <Text style={{ color: "#777", paddingTop: 5 }}>
            {product.description}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "20px",
  },
});
