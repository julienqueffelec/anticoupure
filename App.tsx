import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView
} from 'react-native-safe-area-context';
import type { EcoWatt } from 'types/api.types';
import { getColorAndLabels } from 'utils/getColorAndLabels';
import { getDays } from 'utils/getDays';

import SvgFrance from './assets/france';
import { Days } from './src/components/Days/Days';
import { MapText } from './src/components/MapText/MapText';
import TimelineHours from './src/components/TimelineHours/TimelineHours';
import { Box, ReStyleThemeProvider, useTheme } from './styles/theme';
import { getComputedCurrentSituation } from './utils/computedCurrentSituation';

export default function App() {
  const theme = useTheme();
  const [selectedDay, setSelectedDay] = useState(0);
  const [ecowatt, setEcowatt] = useState<EcoWatt>();
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

  useEffect(() => {
    fetch(
      'https://https://api.github.com/repos/julienqueffelec/anticoupure/contents'
    ).then(response => {
      console.log('response', response);
      response.json().then(data => {
        console.log('data', data);
        setEcowatt(data);
      });
    });
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
  const lastUpdatedDate = ecowatt?.signals[0]?.GenerationFichier;
  const days = ecowatt && getDays(ecowatt);

  const onPress = (selectedDay: number) => {
    setSelectedDay(selectedDay);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <SafeAreaView style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
        <ReStyleThemeProvider>
          <Box flex={1} backgroundColor="primary">
            <Days days={days} onPress={onPress} selectedDay={selectedDay} />
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
