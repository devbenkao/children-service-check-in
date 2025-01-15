import React from "react";

function ListChildComponent() {
  // Get today's date and format it as "Month Day, Year"
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: "long", // Day of the week (e.g., Monday)
    month: "long", // Full month name (e.g., January)
    day: "numeric", // Day of the month (e.g., 14)
    year: "numeric", // Year (e.g., 2025)
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Dynamic header with today's date */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Children Attendance for {dateString}
      </h2>

      {/* Empty Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Grade Level</th>
            <th className="px-4 py-2 text-left">Emergency Contact</th>
            <th className="px-4 py-2 text-left">Check-In Timestamp</th>
            <th className="px-4 py-2 text-left"></th>{" "}
            {/* Empty column for Actions */}
          </tr>
        </thead>
        <tbody>{/* No rows yet, you can add them later */}</tbody>
      </table>
    </div>
  );
}

export default ListChildComponent;
