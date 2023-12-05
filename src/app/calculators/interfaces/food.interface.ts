export interface Food {
  id: string;
  optionName: string;
  unit: 'mL' | 'Taza' | 'Pieza';
  equivalent: number;
  type: 'other' | 'fruit' | 'vegetable';
  potassiumContent: 'high' | 'medium' | 'low' | null;
}
