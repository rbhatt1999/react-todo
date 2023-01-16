import React from "react";
import TodoContainer from "./components/TodoContainer";
import { createRoot } from 'react-dom/client';
import "./app.css"

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode><TodoContainer/></React.StrictMode>);