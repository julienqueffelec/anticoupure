import React from 'react';

import { Box, Text } from '@styles/theme';

interface MapTextProps {
  title: string;
  description: string;
  status: string;
}

export const MapText: React.FC<MapTextProps> = ({
  title,
  description,
  status
}) => {
  const getColor = (status: string) => {
    if (status === 'ok') {
      return 'green';
    }

    return 'red';
  };

  const color = getColor(status);

  return (
    <Box flex={0.4} justifyContent="center" alignItems="center">
      <Text variant="title1" color={color}>
        {title}
      </Text>
      <Text variant="title1" color={color}>
        {description}
      </Text>
      <Text variant="body" color={color} style={{ opacity: 0.8 }}>
        Dernière mise à jour le 7 octobre à 21h30
      </Text>
    </Box>
  );
};
