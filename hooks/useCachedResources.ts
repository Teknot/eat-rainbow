// import { FontAwesome } from 'react-native-vector-icons';
// import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();

        // Load fonts
        // await Font.loadAsync({
        //   ...FontAwesome.font,
        //   'Montserrat_Regular': require('../assets/fonts/static/Montserrat-Regular.ttf'),
        //   'Montserrat_Bold': require('../assets/fonts/static/Montserrat-Bold.ttf'),
        //   'Montserrat_Extra_Bold': require('../assets/fonts/static/Montserrat-ExtraBold.ttf'),
        // });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
