import { atom } from "recoil";

export const fundsState = atom({
  key: "funds",
  default: 10000,
});
