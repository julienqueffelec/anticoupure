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
  color: string;
}

export const Day: React.FC<DayProps> = ({
  day,
  isActive,
  onPress,
  index,
  color
}) => {
  const month = format(new Date(day), 'MMM', {
    locale: fr
  });
  const formattedDay = format(new Date(day), 'd', {
    locale: fr
  });

  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <Box
        padding="m"
        backgroundColor={color as any}
        borderRadius="l"
        alignItems="center"
        justifyContent="center"
        opacity={isActive ? 1 : 0.6}
      >
        <Text variant="title3">
          {formattedDay} {month}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
