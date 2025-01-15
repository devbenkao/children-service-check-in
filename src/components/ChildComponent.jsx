import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ChildComponent({ addChild, updateChild }) {
  const [name, setName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [checkInTimestamp, setCheckInTimestamp] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.childToEdit) {
      const childToEdit = location.state.childToEdit;
      setName(childToEdit.name);
      setGradeLevel(childToEdit.gradeLevel);
      setEmergencyContact(childToEdit.emergencyContact);
      setCheckInTimestamp(childToEdit.checkInTimestamp);
      setIsEditing(true);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedChild = {
      name,
      gradeLevel,
      emergencyContact,
      checkInTimestamp: isEditing
        ? checkInTimestamp
        : new Date().toLocaleString(),
    };

    if (isEditing) {
      updateChild(updatedChild); // Call the updateChild function passed via props
    } else {
      addChild(updatedChild); // Call the addChild function passed via props
    }

    navigate("/"); // Navigate back to the list
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {isEditing ? "Edit Child" : "Add a New Child"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gradeLevel" className="block text-gray-700">
            Grade Level
          </label>
          <input
            type="text"
            id="gradeLevel"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="emergencyContact" className="block text-gray-700">
            Emergency Contact
          </label>
          <input
            type="text"
            id="emergencyContact"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkInTimestamp" className="block text-gray-700">
            Check-In Timestamp
          </label>
          <input
            type="text"
            id="checkInTimestamp"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={checkInTimestamp || new Date().toLocaleString()}
            disabled
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
          >
            {isEditing ? "Update Child" : "Add Child"}
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChildComponent;
