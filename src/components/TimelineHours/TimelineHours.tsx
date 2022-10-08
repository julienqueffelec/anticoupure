import React from 'react';
import { Box, Text } from 'styles/theme';

interface TimelineHoursProps {
  hours: { pas: number; hvalue: number }[];
}

const TimelineHours: React.FC<TimelineHoursProps> = ({ hours }) => {
  const getBackgroundColor = (value: number) => {
    if (value === 1) {
      return 'green';
    }

    if (value === 2) {
      return 'orange';
    }

    return 'red';
  };

  return (
    <>
      <Box flexDirection="row" width="100%" justifyContent="center">
        {Array.from(Array(24).keys()).map((hour, index) => {
          const current = hours.find(e => e.pas === hour);

          if (current) {
            return (
              <Box
                key={current.pas}
                height={50}
                width={6}
                justifyContent="center"
                alignItems="center"
                marginLeft="s"
                borderTopLeftRadius={index === 0 ? 'l' : 'xxs'}
                borderBottomLeftRadius={index === 0 ? 'l' : 'xxs'}
                borderTopRightRadius={index === 23 ? 'l' : 'xxs'}
                borderBottomRightRadius={index === 23 ? 'l' : 'xxs'}
                backgroundColor={getBackgroundColor(current.hvalue)}
              />
            );
          } else {
            return (
              <Box
                width={6}
                height={50}
                justifyContent="center"
                alignItems="center"
                marginLeft="s"
                backgroundColor="primary"
              />
            );
          }
        })}
      </Box>

      <Box flexDirection="row" width="100%" justifyContent="center">
        {Array.from(Array(24).keys()).map((hour, index) => (
          <Box key={hour}>
            {index % 2 ? (
              <Text variant="body" color="white">
                {hour}h
              </Text>
            ) : (
              <Box width={6} />
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export { TimelineHours };
