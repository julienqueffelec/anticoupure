import SvgFrance from '@assets/france';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context';
import { getComputedCurrentSituation } from 'utils/computedCurrentSituation';
import { getColorAndLabels } from 'utils/getColorAndLabels';

import { MapText } from '@components/MapText/MapText';
import { Box, ReStyleThemeProvider } from '@styles/theme';

import mocks from './mocks/mocks.json';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf')
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
  const res = mocks;

  console.log('res', res);
  const computedCurrentSituation = getComputedCurrentSituation(res);
  const { title, description, color } = getColorAndLabels(
    computedCurrentSituation
  );

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
          <MapText title={title} description={description} color={color} />

          <Box flex={0.6} alignItems="center">
            <SvgFrance color="red" />
          </Box>
        </Box>
      </ReStyleThemeProvider>
    </SafeAreaProvider>
  );
}
