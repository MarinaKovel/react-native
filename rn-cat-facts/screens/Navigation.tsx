import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import FullPostScreen from "./FullPostScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Cat Facts'}} />
        <Stack.Screen name="Fact" component={FullPostScreen} options={{title: 'Cat Fact'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;