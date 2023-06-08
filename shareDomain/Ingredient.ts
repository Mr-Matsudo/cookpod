import { Unit } from "./Unit";

export class Ingredient {
    name: string = ""; // 材料名
    quantity: number = 0; // 量
    unit: Unit = Unit.GRAM; // 単位
    constructor() { }
  };