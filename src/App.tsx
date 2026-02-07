import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RouterProvider } from "react-router";
import router from "./routes";
import './App.css'

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
