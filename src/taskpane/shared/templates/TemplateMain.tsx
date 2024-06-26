import React from "react";
// import { Outlet } from "react-router";
// import { Box, Container } from "@mui/material";
// import { HeaderMenu } from "../molecule";

const TemplateMain: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column", padding: "24px" }}>{children}</div>
);

export default TemplateMain;
