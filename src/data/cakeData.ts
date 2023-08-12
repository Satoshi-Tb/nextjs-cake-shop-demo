import { cakeInfo, cakeTableInfo } from "@/components/types/cakeType";

export const initialCakeData: cakeInfo[] = [
  { name: "ショートケーキ", price: 350, stock: 10 },
  { name: "チーズケーキ", price: 380, stock: 8 },
  { name: "シュークリーム", price: 250, stock: 15 },
  { name: "ロールケーキ", price: 250, stock: 5 },
  { name: "モンブラン", price: 300, stock: 10 },
];

export const cakeTableSetting: cakeTableInfo[] = [
  { label: "なまえ", data: "name" },
  { label: "値段", data: "price" },
  { label: "在庫数", data: "stock" },
  { label: "ひとつ売る", data: "sell" },
  { label: "在庫を増やす", data: "refill" },
];
