import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EatRainBowMain from './components/EatRainBowMain';
import LearnMore from './components/LearnMore';
import RegisterMeals from './components/RegisterMeals';

// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';

const Stack = createNativeStackNavigator();

export default function App() {
  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="Home"
            component={EatRainBowMain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LearnMore"
            component={LearnMore} />
          <Stack.Screen
            name="RegisterMeals"
            component={RegisterMeals} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  // }
}
