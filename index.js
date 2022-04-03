import { registerRootComponent } from "expo";
import { LogBox } from "react-native";
import { App } from "./src/App";
import './src/firebase'

LogBox.ignoreLogs(['Setting a timer'])

registerRootComponent(App)