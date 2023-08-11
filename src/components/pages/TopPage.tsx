import React, { useState } from "react";
import { AppBar, Toolbar, Typography, ThemeProvider } from "@mui/material";
import { cakeTableSetting, initialCakeData } from "@/data/cakeData";
import { ListTable } from "../model/ListTable";
import commonStyle from "@/styles/commonStyle";

export const TopPage = () => {
  const [funds, setFunds] = useState(10000);
  return (
    <ThemeProvider theme={commonStyle}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            The Cake Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h3" color="secondary">
        現在の資金:{funds}円
      </Typography>
      <AppBar position="static" color="default">
        <Typography variant="h6" color="inherit">
          販売ケーキ一覧|在庫管理
        </Typography>
      </AppBar>
      <ListTable tableSetting={cakeTableSetting} itemData={initialCakeData} />
    </ThemeProvider>
  );
};
