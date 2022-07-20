import { createRoot } from "react-dom/client";
import React from 'react';
import { Test } from "./components/Test";


const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(<React.StrictMode>
    <Test />
</React.StrictMode>);