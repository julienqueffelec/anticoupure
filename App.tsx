import SvgFrance from '@assets/france';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context';

import { Box, ReStyleThemeProvider, Text } from '@styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <ReStyleThemeProvider>
        <Box flex={1} backgroundColor="primary">
          <Box flex={0.4} justifyContent="center" alignItems="center">
            <Text variant="title1" color="secondary">
              Tout va bien
            </Text>
            <Text variant="title1" color="secondary">
              Ne paniquez pas
            </Text>
          </Box>

          <Box flex={0.6} alignItems="center">
            <SvgFrance />
          </Box>
        </Box>
      </ReStyleThemeProvider>
    </SafeAreaProvider>
  );
}
