import React from "react";
import { materialInfo, materialTableInfo } from "../types/materialType";
import { cakeInfo, cakeTableInfo } from "../types/cakeType";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

type Props = {
  tableSetting: materialTableInfo[] | cakeTableInfo[];
  itemData: materialInfo[] | cakeInfo[];
  handleSell: (idx: number) => void;
  handleSupply: () => void;
};

export const ListTable = ({
  tableSetting,
  itemData,
  handleSell,
  handleSupply,
}: Props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableSetting.map((col) => (
            <TableCell align="center">{col.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {itemData.map((item, rowIdx) => (
          <TableRow key={rowIdx}>
            {tableSetting.map((col, colIdx) =>
              col.data === "sell" ? (
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  key={col.label}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={item.stock <= 0}
                    onClick={() => handleSell(rowIdx)}
                  >
                    1つ売る
                  </Button>
                </TableCell>
              ) : col.data === "refill" ? (
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  key={col.label}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSupply}
                  >
                    1つ補充する
                  </Button>
                </TableCell>
              ) : (
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  key={col.label}
                >
                  {item[col.data]}
                </TableCell>
              )
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
