import React from "react";
import reactDom from "react-dom/client";
import { App }from "./App";
import { ReactHooksProvider } from "./context/ReactHooksContext";
import "../src/styles/global.css"

const rootElement = document.getElementById('root');
const root = reactDom.createRoot(rootElement);

root.render(
    <ReactHooksProvider>
        <App />
    </ReactHooksProvider>
    
);