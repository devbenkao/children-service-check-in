import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListChildComponent from "./components/ListChildComponent";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [children, setChildren] = useState([]);

  const addChild = (newChild) => {
    setChildren([...children, newChild]);
  };

  const updateChild = (updatedChild) => {
    const updatedChildren = children.map((child) =>
      child.name === updatedChild.name ? updatedChild : child
    );
    setChildren(updatedChildren);
  };

  const handleDelete = (index) => {
    const updatedChildren = children.filter((_, i) => i !== index);
    setChildren(updatedChildren);
  };

  return (
    <Router>
      <div className="p-8 bg-gray-200 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Children Service Check-In
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <ListChildComponent
                children={children}
                handleDelete={handleDelete}
              />
            }
          />
          <Route
            path="/add-child"
            element={
              <ChildComponent addChild={addChild} updateChild={updateChild} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
