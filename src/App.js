import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import GroupingControls from "./components/GroupingControls";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center mt-4 text-red-500">{error}</div>;

  // Merge user details into tickets
  const ticketsWithUsers = tickets.map((ticket) => {
    const user = users.find((user) => user.id === ticket.userId);
    return { ...ticket, userName: user?.name || "Unknown" };
  });

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      {/* <h1 className="text-3xl font-bold mb-4 text-center">Interactive Kanban Board</h1> */}
      <div className="w-full max-w-screen-xl">
        {/* Grouping Controls */}
        <GroupingControls
          groupBy={groupBy}
          setGroupBy={setGroupBy}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        {/* Kanban Board */}
        <div className="mt-6">
          <KanbanBoard
            tickets={ticketsWithUsers}
            groupBy={groupBy}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
