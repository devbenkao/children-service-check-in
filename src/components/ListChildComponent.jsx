import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ListChildComponent({ children, handleDelete, attendanceCount }) {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  const handleEdit = (child) => {
    navigate("/add-child", { state: { childToEdit: child } });
  };

  const handleCheckOut = (index) => {
    handleDelete(index);
    setNotification("Child checked out successfully");
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="max-w-full overflow-auto p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md relative">
      {/* Notification */}
      {notification && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100">
          {notification}
        </div>
      )}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Children Attendance for{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h2>
        <p className="text-lg font-medium text-gray-700">
          Total Attendance: {attendanceCount}
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/add-child"); // Pass callback
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-400 focus:outline-none mb-4"
      >
        Add Child
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Photo</th>
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
                {/* New Column for Picture */}
                <td className="px-4 py-2 text-center">
                  {child.picture ? (
                    <img
                      src={child.picture}
                      alt={`${child.name}`} // Use only the child's name as alt text
                      className="w-16 h-16 object-cover rounded-full mx-auto"
                    />
                  ) : (
                    <span>No Picture</span>
                  )}
                </td>

                <td className="px-4 py-2">{child.name}</td>
                <td className="px-4 py-2">{child.gradeLevel}</td>
                <td className="px-4 py-2">{child.emergencyContact}</td>
                <td className="px-4 py-2">{child.checkInTimestamp}</td>
                <td className="px-4 py-2 text-center align-middle box-border">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => handleEdit(child)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleCheckOut(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none"
                    >
                      Check-Out
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListChildComponent;
