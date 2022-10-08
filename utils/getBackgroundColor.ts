export const getBackgroundColor = (value: number) => {
  if (value === 1) {
    return 'green';
  }

  if (value === 2) {
    return 'orange';
  }

  return 'red';
};
