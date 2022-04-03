import { StatusBar } from "expo-status-bar";
import { ref, set } from "firebase/database";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Alert } from "./components";
import { db } from "./firebase";
import { store } from "./redux";
import { HomeScreen } from "./screens";
import { data } from "./screens/Home/data";

const App: React.FC = () => {
  // useEffect(() => {
  //   set(ref(db), data);
  // }, []);
  return (
    <Provider store={store}>
      <StatusBar />
      <HomeScreen />
      <Alert />
    </Provider>
  );
};

export { App };
