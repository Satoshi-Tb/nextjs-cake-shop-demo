import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { cakeTableSetting } from "@/data/cakeData";
import { ListTable } from "../model/ListTable";
import commonStyle from "@/styles/commonStyle";
import { initialMaterialData, materialTableSetting } from "@/data/materialData";
import { useRecoilState, useRecoilValue } from "recoil";
import { fundsState } from "../stores/funds";
import { cakeListState } from "../stores/cake";
import { materialListState } from "../stores/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TopPage = () => {
  const [value, setValue] = useState(0);
  const [funds, setFunds] = useRecoilState(fundsState);
  const [cakeList, setCakeList] = useRecoilState(cakeListState);
  const [materialList, setMaterialList] = useRecoilState(materialListState);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // 「売る」アクション
  const handleSell = (idx: number) => {
    const cake = cakeList[idx];

    setCakeList(
      cakeList.map((cake, i) =>
        i === idx ? { ...cake, stock: cake.stock - 1 } : cake
      )
    );

    setFunds((prev) => prev + cake.price);
  };

  // 「補充する」アクション（ケーキ）
  const handleSupplyCake = (idx: number) => {
    setCakeList(
      cakeList.map((cake, i) =>
        i === idx ? { ...cake, stock: cake.stock + 1 } : cake
      )
    );
  };

  const canSupplyCake = (idx: number, funds: number) => {
    return true;
  };

  const handleSupplyMaterial = (idx: number) => {
    const mat = materialList[idx];
    setMaterialList(
      materialList.map((mat, i) =>
        i === idx ? { ...mat, stock: mat.stock + 1 } : mat
      )
    );
    setFunds((prev) => prev - mat.price);
  };

  const canSupplyMaterial = (idx: number, funds: number) => {
    const mat = materialList[idx];
    return funds >= mat.price;
  };

  useEffect(() => {}, []);

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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="basic tabs example"
          >
            <Tab label="販売ケーキ一覧" {...a11yProps(0)} />
            <Tab label="在庫管理" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ListTable
            tableSetting={cakeTableSetting}
            itemData={cakeList}
            handleSell={handleSell}
            handleSupply={handleSupplyCake}
            canSupply={canSupplyCake}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ListTable
            tableSetting={materialTableSetting}
            itemData={materialList}
            handleSell={() => {}}
            handleSupply={handleSupplyMaterial}
            canSupply={canSupplyMaterial}
          />
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
};
