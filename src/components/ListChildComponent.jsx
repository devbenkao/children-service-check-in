import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ListChildComponent({ children, handleDelete }) {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  const handleEdit = (child) => {
    // Navigate to the edit page and pass the child data via the state
    navigate("/add-child", { state: { childToEdit: child } });
  };

  const handleCheckOut = (index) => {
    // Call the handleDelete passed from the parent
    handleDelete(index);

    // Show the notification
    setNotification("Child checked out successfully");

    // Remove the notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md relative">
      {/* Notification */}
      {notification && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100">
          {notification}
        </div>
      )}

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
            <th className="px-4 py-2 text-left"></th>
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
                  onClick={() => handleCheckOut(index)} // Custom handler for checkout with notification
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
