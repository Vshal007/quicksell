import React from "react";
import TicketCard from "./TicketCard";
import { FaTasks, FaClipboardList, FaHistory } from "react-icons/fa";
import { RiProgress4Line,RiProgress8Fill } from "react-icons/ri";

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  // Map group names to their respective icons
  const groupIcons = {
    "In Progress": <RiProgress4Line className="text-yellow-500 inline-block mr-2" />,
    "To Do": <RiProgress8Fill className="text-green-500 inline-block mr-2" />,
    "Backlog": <FaHistory className="text-red-500 inline-block mr-2" />,
  };

  // Group tickets based on `groupBy` value
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey = groupBy === "user" ? ticket.userName : ticket[groupBy];
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  // Sort tickets within each group
  Object.keys(groupedTickets).forEach((key) => {
    groupedTickets[key].sort((a, b) => {
      if (sortBy === "priority") return b.priority - a.priority; // Descending priority
      if (sortBy === "title") return a.title.localeCompare(b.title); // Ascending title
      return 0;
    });
  });

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 overflow-x-auto p-2">
      {Object.entries(groupedTickets).map(([key, group]) => (
        <div
          key={key}
          className="min-w-[18rem] max-w-[20rem] flex-shrink-0 flex-grow bg-white rounded shadow-md p-4 sm:w-auto mb-4 sm:mb-0"
        >
          <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            {/* Display icon if available, otherwise just the text */}
            {groupIcons[key] || null}
            {key || "Unassigned"}
          </h2>
          {group.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
