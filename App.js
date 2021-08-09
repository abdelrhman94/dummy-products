import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Card from "./components/Card";
import { productsApi } from "./products";

export default function App() {
  const products = productsApi();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => {
        return <Card product={product} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
