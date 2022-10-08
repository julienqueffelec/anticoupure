import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
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
import { TimelineHours } from './src/components/TimelineHours/TimelineHours';
import { Box, ReStyleThemeProvider } from './styles/theme';

export default function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    fetch(
      'https://raw.githubusercontent.com/julienqueffelec/anticoupure/main/ecowatt.json'
    ).then(response => {
      response.json().then(data => {
        setEcowatt(data);
      });
      setLoading(false);
    });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  const computedCurrentSituation =
    ecowatt && ecowatt.signals[selectedDay]?.dvalue;
  const { title, description, color } = getColorAndLabels(
    computedCurrentSituation
  );
  const lastUpdatedDate = ecowatt?.signals[selectedDay]?.GenerationFichier;
  const days = ecowatt && getDays(ecowatt);
  const hours = ecowatt && ecowatt?.signals[selectedDay]?.values;

  const onPress = (selectedDay: number) => {
    setSelectedDay(selectedDay);
  };

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <SafeAreaView style={{ backgroundColor: '#04070E', flex: 1 }}>
        <ScrollView>
          <ReStyleThemeProvider>
            <Box flex={1} backgroundColor="primary">
              <Days days={days} onPress={onPress} selectedDay={selectedDay} />

              <Box height={30} />
              <MapText
                title={title}
                description={description}
                color={color}
                date={lastUpdatedDate}
              />

              <Box height={30} />

              {!!hours && <TimelineHours hours={hours} />}

              <Box height={30} />

              <Box flex={0.6} alignItems="center">
                <SvgFrance color={color} />
              </Box>
            </Box>
          </ReStyleThemeProvider>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
