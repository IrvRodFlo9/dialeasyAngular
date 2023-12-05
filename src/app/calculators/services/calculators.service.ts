import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.interface';

@Injectable({ providedIn: 'root' })
export class CalculatorsService {
  constructor() {}

  private foods: Food[] = [
    /*  Water  */
    {
      id: 'water',
      optionName: 'Agua',
      unit: 'mL',
      equivalent: 1,
      type: 'other',
      potassiumContent: null,
    },
    {
      id: 'jelly',
      optionName: 'Gelatina',
      unit: 'Taza',
      equivalent: 250,
      type: 'other',
      potassiumContent: null,
    },
    {
      id: 'apple',
      optionName: 'Manzana',
      unit: 'Pieza',
      equivalent: 50,
      type: 'fruit',
      potassiumContent: 'low',
    },
    {
      id: 'orange',
      optionName: 'Naranja',
      unit: 'Pieza',
      equivalent: 50,
      type: 'fruit',
      potassiumContent: 'high',
    },
    {
      id: 'mango',
      optionName: 'Mango Manila',
      unit: 'Pieza',
      equivalent: 50,
      type: 'fruit',
      potassiumContent: 'high',
    },
    {
      id: 'watermelon',
      optionName: 'Sandía',
      unit: 'Taza',
      equivalent: 100,
      type: 'fruit',
      potassiumContent: 'medium',
    },
    {
      id: 'papaya',
      optionName: 'Papaya',
      unit: 'Taza',
      equivalent: 100,
      type: 'fruit',
      potassiumContent: 'high',
    },
    {
      id: 'pineapple',
      optionName: 'Piña',
      unit: 'Taza',
      equivalent: 200,
      type: 'fruit',
      potassiumContent: 'low',
    },
    {
      id: 'melon',
      optionName: 'Melón',
      unit: 'Taza',
      equivalent: 100,
      type: 'fruit',
      potassiumContent: 'high',
    },
    {
      id: 'pear',
      optionName: 'Pera',
      unit: 'Pieza',
      equivalent: 100,
      type: 'fruit',
      potassiumContent: 'low',
    },
    {
      id: 'tangerine',
      optionName: 'Mandarina',
      unit: 'Pieza',
      equivalent: 50,
      type: 'fruit',
      potassiumContent: 'high',
    },
    {
      id: 'tuna',
      optionName: 'Tuna',
      unit: 'Pieza',
      equivalent: 100,
      type: 'fruit',
      potassiumContent: 'high',
    },
    {
      id: 'grape',
      optionName: 'Uva',
      unit: 'Pieza',
      equivalent: 2.77,
      type: 'fruit',
      potassiumContent: 'medium',
    },
  ];

  private foodsMap = new Map(this.foods.map((food) => [food.id, food]));

  public getFood(foodID: string): Food | undefined {
    return this.foodsMap.get(foodID);
  }
}
