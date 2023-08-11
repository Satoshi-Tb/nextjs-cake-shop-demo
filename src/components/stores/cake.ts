import { atom } from "recoil";
import { cakeInfo } from "@/components/types/cakeType";
import { initialCakeData } from "@/data/cakeData";

export const cakeListState = atom<cakeInfo[]>({
  key: "cakeList",
  default: initialCakeData,
});
