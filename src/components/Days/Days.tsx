import React from 'react';
import { Box } from 'styles/theme';
import { getBackgroundColor } from 'utils/getBackgroundColor';

import { Day } from '../../../src/components/Day/Day';

interface DaysProps {
  days: { day: string; dvalue: number }[] | undefined;
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
      {days.map((day, i: number) => (
        <Day
          key={i}
          day={day.day}
          isActive={selectedDay === i}
          onPress={onPress}
          index={i}
          color={getBackgroundColor(day.dvalue)}
        />
      ))}
    </Box>
  </Box>
);
