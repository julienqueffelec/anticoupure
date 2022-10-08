export const getColorAndLabels = (
  number: number | undefined
): { title: string; description: string; color: string } => {
  if (number === 3) {
    return {
      title: 'Système électrique très tendu',
      description:
        'Coupures inévitables si nous ne baissons pas notre consommation',
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
