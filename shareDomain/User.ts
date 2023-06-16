import { z } from "zod";
import mongoose from "mongoose"

export interface UserInfo {
  id?: string,
  name?: string
}

export class User implements UserInfo {
  id: string;
  name: string;

  constructor(user: UserInfo = {}) {
    this.id = user.id || "";
    this.name = user.name || "";
  }
  static createZodSchema() {
    return z.object({
      id: z.string(), // ユーザーの一意の識別子
      name: z.string(), // ユーザー名
    });
  }

  static createMongooseSchema() {
    return new mongoose.Schema({
      id: String,
      name: String
    })
  }
}
