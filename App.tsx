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
import TimelineHours from '@components/TimelineHours/TimelineHours';
import { Box, ReStyleThemeProvider } from '@styles/theme';

import ecowatt from './file/ecowatt.json';

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
  const computedCurrentSituation = getComputedCurrentSituation(ecowatt);
  const { title, description, color } = getColorAndLabels(
    computedCurrentSituation
  );
  const lastUpdatedDate = ecowatt.signals[0]?.GenerationFichier;

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
          <MapText
            title={title}
            description={description}
            color={color}
            date={lastUpdatedDate}
          />

          <TimelineHours />

          <Box flex={0.6} alignItems="center">
            <SvgFrance color={color} />
          </Box>
        </Box>
      </ReStyleThemeProvider>
    </SafeAreaProvider>
  );
}
