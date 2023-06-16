import { Unit } from "./Unit";
import { z } from "zod";
import mongoose from "mongoose";

interface IngredientInfo {
  name :string,
  quantity: number,
  unit: Unit
}

export class Ingredient implements IngredientInfo {
  name :string;
  quantity: number;
  unit: Unit;
  constructor(ingredient: IngredientInfo) {
    this.name = ingredient.name || "",
    this.quantity = ingredient.quantity || 0,
    this.unit = ingredient.unit || Unit.ETC
  }

  static createZodSchema() {
    return z.object({
      name: z.string(), // 材料名
      quantity: z.number(), // 量
      unit: z.nativeEnum(Unit)// 単位
     });
  }

  static createMongooseSchema() {
    return new mongoose.Schema({
      name: String, // 材料名
      quantity: Number, // 量
      unit: Unit// 単位
    });
  }
}