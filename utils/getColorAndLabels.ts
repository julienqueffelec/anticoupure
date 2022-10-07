export const getColorAndLabels = (
  number: number
): { title: string; description: string; color: string } => {
  if (number === 3) {
    return {
      title: 'Coupure en cours',
      description: 'Le réseau est perturbé',
      color: 'red'
    };
  }

  if (number === 2) {
    return {
      title: 'Risque de coupure',
      description: 'Il est possible que le réseau se dégrade ',
      color: 'orange'
    };
  }

  return {
    title: 'Tout va bien',
    description: 'Pas de risque de coupure',
    color: 'green'
  };
};
