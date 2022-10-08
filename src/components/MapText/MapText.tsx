import { formatDistance } from 'date-fns';
import { fr } from 'date-fns/locale';
import React from 'react';
import { Box, Text } from 'styles/theme';

interface MapTextProps {
  title: string;
  description: string;
  color: string | any;
  date: string | undefined;
}

export const MapText: React.FC<MapTextProps> = ({
  title,
  description,
  color,
  date
}) => (
  <Box flex={0.4} justifyContent="center" alignItems="center">
    <Text variant="title2" color={color} textAlign="center">
      {title}
    </Text>
    <Box height={5} />
    <Box height={50} justifyContent="center" alignItems="center">
      <Text variant="title3" color={color} textAlign="center">
        {description}
      </Text>
    </Box>
    <Box height={5} />
    <Text variant="body" color={color} style={{ opacity: 0.8 }}>
      Dernière mise à jour il y a{' '}
      {!!date &&
        formatDistance(new Date(date), new Date(), {
          addSuffix: true,
          locale: fr
        })}
    </Text>
  </Box>
);
