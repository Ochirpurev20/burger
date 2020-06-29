import React from "react";
import "./style.css";

import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";

function App() {
  return (
    <div>
      <Toolbar />
      <main className="content">
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
