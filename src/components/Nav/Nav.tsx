import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export interface NavProps {
  children: React.ReactNode;
}

export default function Nav({ children }: NavProps): React.ReactElement {
  return (
    <React.Fragment>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            511 Data visualization
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </React.Fragment>
  );
}
