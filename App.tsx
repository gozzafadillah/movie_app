import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
