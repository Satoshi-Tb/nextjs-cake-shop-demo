import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { cakeTableSetting, initialCakeData } from "@/data/cakeData";
import { ListTable } from "../model/ListTable";
import commonStyle from "@/styles/commonStyle";
import { initialMaterialData, materialTableSetting } from "@/data/materialData";

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
  const [funds, setFunds] = useState(10000);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="販売ケーキ一覧" {...a11yProps(0)} />
            <Tab label="在庫管理" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ListTable
            tableSetting={cakeTableSetting}
            itemData={initialCakeData}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ListTable
            tableSetting={materialTableSetting}
            itemData={initialMaterialData}
          />
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
};
