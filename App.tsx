import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PageUser from "./screens/PageUser";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <PageUser/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
