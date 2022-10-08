import React from 'react';
import { Box } from 'styles/theme';

import { Day } from '../../../src/components/Day/Day';

interface DaysProps {
  days: string[] | undefined;
  selectedDay: number;
  onPress: (e: number) => void;
}

export const Days: React.FC<DaysProps> = ({
  days = [],
  onPress,
  selectedDay
}) => (
  <Box>
    <Box flexDirection="row" justifyContent="space-between">
      {days.map((day, i) => (
        <Day
          key={i}
          day={day}
          isActive={selectedDay === i}
          onPress={onPress}
          index={i}
        />
      ))}
    </Box>
  </Box>
);
