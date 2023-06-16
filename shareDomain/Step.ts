import { z } from "zod";
import mongoose from "mongoose";

export interface StepInfo {
  number?: number,
  instruction?: string,
  imageUrl?: string,
}

export class Step implements StepInfo {
  number: number;
  instruction: string;
  imageUrl: string;
  constructor(step: StepInfo = {}) {
      this.number = step.number || 0;
      this.instruction = step.instruction || "";
      this.imageUrl = step.imageUrl || "";
  }
  static createZodSchema() {
    return z.object({
      number: z.number(), // 手順の番号
      instruction: z.string(), // 手順の説明
      imageUrl: z.string(), // 手順の画像のURL
    })
  }

  static createMongooseSchema() {
    return new mongoose.Schema({
      number: Number,
      instruction: String,
      imageUrl: String,
    })
  }
}