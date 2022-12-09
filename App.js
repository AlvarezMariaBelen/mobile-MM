import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/navigation/BottomTab';
import { Provider } from "react-redux"
import { store } from './src/redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
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
