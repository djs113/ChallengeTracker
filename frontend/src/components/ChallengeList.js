import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Link } from "react-router-dom";


const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await API.get("/challenges/getChallenges", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setChallenges(response.data.data);
      } catch (error) {
        console.error("Error fetching challenges:", error);
      }
    };

    fetchChallenges();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Available Challenges</h2>
      {challenges.length === 0 ? (
        <p>No challenges available.</p>
      ) : (
        <ul>
          {challenges.map((challenge) => (
            <li key={challenge._id} className="mb-4 p-4 border rounded-md">
              <h3 className="text-xl font-semibold">{challenge.title}</h3>
              <p>{challenge.description}</p>
              <p><strong>Start Date:</strong> {new Date(challenge.startDate).toLocaleDateString()}</p>
              <p><strong>Goal:</strong> {challenge.goal}</p>
              <Link to={`/challenges/${challenge._id}`} className="text-blue-500">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChallengeList;
