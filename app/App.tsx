import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./context/store";
import ProductScreen from "./screens/ProductScreen";
import BottomNav from "./components/BottomNav";
import CartScreen from "./screens/CartScreen";
import UserScreen from "./screens/UserScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { SetStateAction, useEffect, useState } from "react";

export type StackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Product: { id: string };
  User: undefined;
  Cart: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const queryClient = new QueryClient();

type BottomNavigationProps = {
  setActiveScreen: React.Dispatch<SetStateAction<string>>;
};
const BottomNavigation = ({ setActiveScreen }: BottomNavigationProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const index = navigation.getState()?.index;
      const currentScreen = navigation.getState()?.routes[index].name;
      setActiveScreen(currentScreen);
      // console.log("ACTIVE SCREEN: " + currentScreen);
    });
    return unsubscribe;
  }, [navigation]);
  return <></>;
};

export default function App() {
  const [activeScreen, setactiveScreen] = useState("");
  return (
    <NavigationContainer>
      <BottomNavigation setActiveScreen={setactiveScreen} />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                animationTypeForReplace: "push",
                animation: "fade",
              }}
            />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen
              name="User"
              component={UserScreen}
              options={{
                animationTypeForReplace: "push",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{
                animationTypeForReplace: "push",
                animation: "fade",
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                animationTypeForReplace: "push",
                animation: "fade",
              }}
            />
          </Stack.Navigator>
        </QueryClientProvider>
      </Provider>
      {activeScreen && activeScreen !== "Onboarding" && (
        <BottomNav activeScreen={activeScreen} />
      )}
    </NavigationContainer>
  );
}
