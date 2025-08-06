/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { StatsigProvider } from '@statsig/react-bindings';
import { StatsigClient } from '@statsig/js-client';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';

const STATSIG_CLIENT_KEY = "client-TdQaYfeJQZO4rnc8N0xzYYqIWNKcSoT2RuSw7RNqPLN";

const statsigClient = new StatsigClient(
  STATSIG_CLIENT_KEY,
  { userID: "Guillermo" },
  {
    plugins: [
      new StatsigSessionReplayPlugin(),
      new StatsigAutoCapturePlugin(),
    ],
  }
);

statsigClient.initializeAsync().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <StatsigProvider client={statsigClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StatsigProvider>
    </React.StrictMode>
  );
});
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { StatsigProvider } from '@statsig/react-bindings';

const STATSIG_CLIENT_KEY = "client-TdQaYfeJQZO4rnc8N0xzYYqIWNKcSoT2RuSw7RNqPLN";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StatsigProvider
      sdkKey={STATSIG_CLIENT_KEY}
      user={{ userID: "Guillermo" }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StatsigProvider>
  </React.StrictMode>
);