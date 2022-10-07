export const getComputedCurrentSituation = (res: any) => {
  const inProgress = res.signals[3].dvalue;
  const riskCut = res.signals[2].dvalue;

  if (inProgress === 3) {
    return inProgress;
  }

  if (riskCut === 2) {
    return riskCut;
  }

  return res.signals[0].dvalue;
};
