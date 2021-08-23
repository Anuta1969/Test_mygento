import "./App.css";
import Form from "./Form";
import { UserContext } from "./UserContext";
import React, { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value={{ value, setValue }}>
        <Form />
      </UserContext.Provider>
    </div>
  );
}

export default App;
