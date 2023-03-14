import React from "react";
import { useQuery } from "react-query";

import { fetchStopMonitoring } from "../api/stopMonitoring";

export default function Map(): React.ReactElement {
  const { data } = useQuery("stopMonitoring", () => fetchStopMonitoring("S3"));
  return <p>{JSON.stringify(data)}</p>;
}
