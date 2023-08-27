import { StyleSheet, Text, View } from "react-native";
import Main from "./Main";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
