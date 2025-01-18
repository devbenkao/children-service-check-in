import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ChildComponent({ addChild, updateChild }) {
  const location = useLocation();
  const navigate = useNavigate();

  // For new child or editing existing one
  const childToEdit = location.state?.childToEdit;

  const [name, setName] = useState(childToEdit?.name || "");
  const [gradeLevel, setGradeLevel] = useState(childToEdit?.gradeLevel || "");
  const [emergencyContact, setEmergencyContact] = useState(
    childToEdit?.emergencyContact || ""
  );
  const [checkInTimestamp, setCheckInTimestamp] = useState(
    childToEdit?.checkInTimestamp || new Date().toLocaleString()
  );
  const [image, setImage] = useState(childToEdit?.picture || null);

  useEffect(() => {
    if (childToEdit) {
      // Set the image preview if editing
      setImage(childToEdit.picture);
    }
  }, [childToEdit]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newChild = {
      name,
      gradeLevel,
      emergencyContact,
      checkInTimestamp,
      picture: image,
    };

    if (childToEdit) {
      updateChild(newChild);
    } else {
      addChild(newChild);
    }

    navigate("/"); // Navigate back to the children list
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to the children list without saving
  };

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {childToEdit ? "Edit Child" : "Add New Child"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-600"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="gradeLevel"
            className="block text-sm font-semibold text-gray-600"
          >
            Grade Level
          </label>
          <input
            id="gradeLevel"
            type="text"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="emergencyContact"
            className="block text-sm font-semibold text-gray-600"
          >
            Emergency Contact
          </label>
          <input
            id="emergencyContact"
            type="text"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="checkInTimestamp"
            className="block text-sm font-semibold text-gray-600"
          >
            Check-In Timestamp
          </label>
          <input
            id="checkInTimestamp"
            type="text"
            value={checkInTimestamp}
            onChange={(e) => setCheckInTimestamp(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-semibold text-gray-600"
          >
            Picture
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {image && (
            <div className="mt-2 text-center">
              <img
                src={image}
                alt="Child"
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
            </div>
          )}
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 focus:outline-none"
          >
            {childToEdit ? "Update Child" : "Add Child"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChildComponent;
