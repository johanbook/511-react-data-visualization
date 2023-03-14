import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Nav from "./components/Nav";
import Map from "./pages/Operators";

const queryClient = new QueryClient();

export default function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav>
        <Map />
      </Nav>
    </QueryClientProvider>
  );
}
