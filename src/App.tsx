import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Map from "./pages/Operators";

const queryClient = new QueryClient();

export default function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
  );
}
