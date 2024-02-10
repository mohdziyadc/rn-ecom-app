import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./context/store";

export type StackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const queryClient = new QueryClient();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </QueryClientProvider>
      </Provider>
    </NavigationContainer>
  );
}
