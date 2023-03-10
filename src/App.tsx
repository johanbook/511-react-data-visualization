import React from "react";

import { config } from "./config";

export default function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <p>
        CONFIG:
        {JSON.stringify({ config })}
      </p>

      <p>
        ENVS:
        {JSON.stringify({ env: process.env })}
      </p>
    </div>
  );
}
