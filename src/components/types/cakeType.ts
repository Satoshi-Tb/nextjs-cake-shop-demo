export interface cakeInfo {
  name: string;
  price: number;
  stock: number;
  /* cakeInfo[key]でアクセスする場合の型をstring、またはnumberに限定するため*/
  [key: string]: string | number;
}

export interface cakeTableInfo {
  label: string;
  data: string;
  [key: string]: string;
}
