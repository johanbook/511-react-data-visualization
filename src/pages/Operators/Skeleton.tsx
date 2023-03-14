import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MuiSkeleton from "@mui/material/Skeleton";

export default function Skeleton(): React.ReactElement {
  const elements = [100, 70, 90, 80, 50, 93, 54, 98, 130];
  return (
    <List>
      {elements.map((element) => (
        <ListItem key={element}>
          <MuiSkeleton height={25} width={element} />
        </ListItem>
      ))}
    </List>
  );
}
