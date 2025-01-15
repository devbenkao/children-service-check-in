import React from "react";
import { useNavigate } from "react-router-dom";

function ListChildComponent({ children, handleDelete }) {
  const navigate = useNavigate();

  const handleEdit = (child) => {
    // Navigate to the edit page and pass the child data via the state
    navigate("/add-child", { state: { childToEdit: child } });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Children Attendance for{" "}
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h2>

      <button
        onClick={() => navigate("/add-child")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-400 focus:outline-none mb-4"
      >
        Add Child
      </button>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Grade Level</th>
            <th className="px-4 py-2 text-left">Emergency Contact</th>
            <th className="px-4 py-2 text-left">Check-In Timestamp</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {children.map((child, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{child.name}</td>
              <td className="px-4 py-2">{child.gradeLevel}</td>
              <td className="px-4 py-2">{child.emergencyContact}</td>
              <td className="px-4 py-2">{child.checkInTimestamp}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(child)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)} // Call the handleDelete passed from App.js
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none"
                >
                  Check-Out
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListChildComponent;
