import React from "react";
import TodoContainer from "./components/TodoContainer";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode><TodoContainer/></React.StrictMode>);