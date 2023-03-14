import React from "react";
import { useQuery } from "react-query";

import { fetchOperators } from "../api/operators";

export default function Operators(): React.ReactElement {
  const { error, data, isLoading } = useQuery("gtfsoperators", () =>
    fetchOperators()
  );

  if (error) {
    return <p>error</p>;
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return <p>{JSON.stringify(data)}</p>;
}
