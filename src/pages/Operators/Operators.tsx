import React from "react";
import { useQuery } from "react-query";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { fetchOperators } from "../../api/operators";
import { IOperator } from "../../domain/operators";
import Skeleton from "./Skeleton";

interface OperatorProps {
  operator: IOperator;
}

function Operator({ operator }: OperatorProps): React.ReactElement {
  return (
    <ListItem>
      <ListItemText primary={operator.Name} />
    </ListItem>
  );
}

export default function Operators(): React.ReactElement {
  const { error, data, isLoading } = useQuery("gtfsoperators", () =>
    fetchOperators()
  );

  if (error) {
    return <p>error</p>;
  }

  if (isLoading) {
    return <Skeleton />;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return (
    <List>
      {data.map((operator) => (
        <Operator key={operator.Id} operator={operator} />
      ))}
    </List>
  );
}
