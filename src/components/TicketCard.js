import React from "react";

const TicketCard = ({ ticket }) => {
    const priorityColors = {
        0: "bg-gray-500",
        1: "bg-blue-500",
        2: "bg-green-500",
        3: "bg-yellow-500",
        4: "bg-red-500",
    };

    // Function to get initials from the userName
    const getInitials = (name) => {
        if (!name) return "U"; // Default to "U" for "Unassigned"
        const initials = name
            .split(" ")
            .map((word) => word[0].toUpperCase())
            .join("");
        return initials;
    };

    return (
        <div className="relative p-4 bg-white shadow-md rounded-lg mb-4">
            {/* Circle with Initials */}
            <div className="absolute top-2 right-2 w-8 h-8 bg-gray-300 text-white font-bold flex items-center justify-center rounded-full shadow">
                {getInitials(ticket.userName)}

                {/* Priority Circle */}
                <div
                    className={`absolute bottom-0 left-0 w-4 h-4 rounded-full border-2 border-white ${priorityColors[ticket.priority] || "bg-gray-500"
                        }`}
                ></div>
            </div>

            {/* Ticket Details */}
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-md">{ticket.title}</h2>
            </div>
            <p className="text-sm text-gray-600 mt-2">{ticket.tag.join(", ")}</p>
            <p className="text-sm text-gray-600 mt-1">
                <span className="font-semibold">Status:</span> {ticket.status}
            </p>
            <p className="text-sm text-gray-600 mt-1">
                <span className="font-semibold">Assigned To:</span>{" "}
                {ticket.userName || "Unassigned"}
            </p>
        </div>
    );
};

export default TicketCard;
