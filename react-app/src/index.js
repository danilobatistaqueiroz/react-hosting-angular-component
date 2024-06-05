import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

await import('http://127.0.0.1:8000/userpanel/app-one.js');

await import('http://127.0.0.1:8000/userpanel/app-two.js');

await import('http://127.0.0.1:8000/userpanel/hello.js');

import App from "./App";

const doc = document.getElementById("buttonReact");
if(doc){
  const root = createRoot(doc);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.log('index.js react');
}