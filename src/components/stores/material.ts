import { atom } from "recoil";
import { materialInfo } from "../types/materialType";
import { initialMaterialData } from "@/data/materialData";

export const materialListState = atom<materialInfo[]>({
  key: "materialList",
  default: initialMaterialData,
});
