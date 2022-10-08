export type EcoWatt = {
  signals: {
    GenerationFichier: string;
    jour: string;
    dvalue: number;
    message: string;
    values: { pas: number; hvalue: number }[];
  }[];
};
