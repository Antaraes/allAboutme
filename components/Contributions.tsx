// components/ContributionsTable.tsx
"use client";
import { useState, useEffect } from "react";

const ContributionsTable: React.FC = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch("https://api.github.com/users/Antares/events");
        const data = await response.json();
        setContributions(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContributions();
  }, []);

  return (
    <div className="dark:text-darkText">
      <h2>Your GitHub Contributions</h2>
      <table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Commits</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {contributions.map((event: any) => (
            <tr key={event.id}>
              <td>{event.repo.name}</td>
              <td>{event.payload.size}</td>
              {/* Modify this based on the data you want to display */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContributionsTable;
