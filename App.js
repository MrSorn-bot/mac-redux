// App.js (เวอร์ชันแก้แล้ว)
import React from "react";
import Navigators from "./src/screen/Navigators";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
       <Provider store={store}>

      <Navigators/>
      </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
