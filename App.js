// App.js (เวอร์ชันแก้แล้ว)
import React from "react";
import Navigators from "./src/screen/Navigators";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigators />
    </SafeAreaProvider>
  );
}
