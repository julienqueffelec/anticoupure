import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from 'styles/theme';

interface DayProps {
  day: string;
  isActive: boolean;
  onPress: (e: number) => void;
  index: number;
}

export const Day: React.FC<DayProps> = ({ day, isActive, onPress, index }) => {
  const result = format(new Date(day), 'PP', {
    locale: fr
  });

  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <Box
        height={60}
        backgroundColor="green"
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
        opacity={isActive ? 1 : 0.6}
      >
        <Text variant="title3">{result}</Text>
      </Box>
    </TouchableOpacity>
  );
};
