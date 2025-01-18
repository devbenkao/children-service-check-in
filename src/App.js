import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListChildComponent from "./components/ListChildComponent";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [children, setChildren] = useState([]);

  // Function to add a new child
  const addChild = (newChild) => {
    setChildren([...children, newChild]);
  };

  // Function to update an existing child
  const updateChild = (updatedChild) => {
    const updatedChildren = children.map((child) =>
      child.name === updatedChild.name ? updatedChild : child
    );
    setChildren(updatedChildren);
  };

  // Function to delete a child by index
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
          {/* Route for listing children */}
          <Route
            path="/"
            element={
              <ListChildComponent
                children={children}
                handleDelete={handleDelete}
              />
            }
          />
          {/* Route for adding/updating a child */}
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
