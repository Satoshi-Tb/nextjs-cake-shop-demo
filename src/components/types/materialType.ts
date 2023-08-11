export interface materialInfo {
  name: string;
  price: number;
  stock: number;
  [key: string]: string | number;
}

export interface materialTableInfo {
  label: string;
  data: string;
  [key: string]: string;
}
