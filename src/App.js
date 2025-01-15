import React from "react";
import ListChildComponent from "./components/ListChildComponent"; // Import ListChildComponent

function App() {
  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Children Service Check-In
      </h1>
      {/* Add ListChildComponent here */}
      <ListChildComponent />
    </div>
  );
}

export default App;
