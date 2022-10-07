import { useTheme } from '@shopify/restyle';
import React from 'react';
import { View } from 'react-native';

import { Text } from '@styles/theme';

const TimelineHours = () => {
  const theme = useTheme();

  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {Array.from(Array(24).keys()).map((hour, index) => (
          <View
            key={hour}
            style={{
              height: 50,
              width: 10,
              backgroundColor: theme.colors.green,
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
