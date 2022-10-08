import { useTheme } from '@shopify/restyle';
import React from 'react';
import { View } from 'react-native';

import { Text } from '@styles/theme';

const hours = [
  { hour: 0, status: 1 },
  { hour: 1, status: 1 },
  { hour: 2, status: 1 },
  { hour: 3, status: 1 },
  { hour: 4, status: 1 },
  { hour: 5, status: 1 },
  { hour: 6, status: 1 },
  { hour: 7, status: 1 },
  { hour: 8, status: 1 },
  { hour: 9, status: 1 },
  { hour: 10, status: 1 },
  { hour: 11, status: 1 },
  { hour: 12, status: 1 },
  { hour: 13, status: 1 },
  { hour: 14, status: 1 },
  { hour: 15, status: 1 },
  { hour: 16, status: 1 },
  { hour: 17, status: 1 },
  { hour: 18, status: 1 },
  { hour: 19, status: 1 },
  { hour: 20, status: 1 },
  { hour: 21, status: 1 },
  { hour: 22, status: 1 },
  { hour: 23, status: 1 }
];

const TimelineHours = () => {
  const theme = useTheme();

  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {hours.map((hour, index) => (
          <View
            key={hour.hour}
            style={{
              height: 50,
              width: 10,
              backgroundColor:
                hour.status === 1
                  ? theme.colors.green
                  : hour.status === 2
                  ? theme.colors.orange
                  : theme.colors.red,
              borderTopLeftRadius: index === 0 ? 10 : 0,
              borderBottomLeftRadius: index === 0 ? 10 : 0,
              borderTopRightRadius: index === 23 ? 10 : 0,
              borderBottomRightRadius: index === 23 ? 10 : 0,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5
            }}
          />
        ))}
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        {Array.from(Array(24).keys()).map((hour, index) => (
          <View key={hour}>
            {index % 2 ? (
              <Text variant="body" color="white">
                {hour}h
              </Text>
            ) : (
              <View style={{ width: 10 }} />
            )}
          </View>
        ))}
      </View>
    </>
  );
};

export default React.memo(TimelineHours);
