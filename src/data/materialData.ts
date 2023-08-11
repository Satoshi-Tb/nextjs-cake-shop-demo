import {
  materialInfo,
  materialTableInfo,
} from "@/components/types/materialType";

export const initialMaterialData: materialInfo[] = [
  { name: "小麦粉", price: 50, stock: 15 },
  { name: "牛乳", price: 30, stock: 8 },
  { name: "たまご", price: 30, stock: 15 },
  { name: "生クリーム", price: 200, stock: 3 },
  { name: "マロン", price: 100, stock: 4 },
];

export const materialTableSetting: materialTableInfo[] = [
  { label: "なまえ", data: "name" },
  { label: "値段", data: "price" },
  { label: "在庫数", data: "stock" },
  { label: "在庫を増やす", data: "refill" },
];
