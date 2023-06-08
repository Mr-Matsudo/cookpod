import { Ingredient } from "./Ingredient";
import { User } from "./User";
import { Step } from "./Step";

export class Recipe  {
  id: string = ""; // レシピの一意の識別子
  title: string = ""; // レシピの名前
  description: string = ""; // レシピの概要や説明
  ingredients: Ingredient[] = []; // 必要な材料のリスト
  steps: Step[] = []; // 調理手順のリスト
  servings: number = 1; // 何人分のレシピか
  cookTime: number = 0; // 調理に必要な時間（分）, 下ごしらえの時間も含む
  author: User = new User(); // レシピの投稿者
  postedAt: Date = new Date; // レシピが投稿された日時
  constructor() {
  }
};