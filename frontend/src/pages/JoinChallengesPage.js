import React, { useEffect, useState } from "react";
import API from "../utils/api";

const JoinChallengesPage = () => {
  const [challenges, setChallenges] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await API.get("/challenges/getAvailableChallenges", {
        headers: { Authorization: `Bearer ${token}` },
      });
        setChallenges(response.data.challenges);
      } catch (err) {
        console.error(err);
      }
    };

    fetchChallenges();
  }, []);

  const joinChallenge = async (challengeId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await API.post(`/challenges/joinChallenge/${challengeId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(response.data.message);
    } catch (err) {
      console.error(err);
      setMessage("Failed to join challenge");
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Join a Challenge</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      {challenges.length === 0 ? (
          <p>No challenges available.</p>
        ) : (
          null
        )
        }
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge._id} className="border p-4 mb-4">
            <h3 className="text-lg font-bold">{challenge.title}</h3>
            <p>{challenge.description}</p>
            <p>Goal: {challenge.goal}</p>
            <p>Difficulty: {challenge.difficultyLevel}</p>
            <button
              onClick={() => joinChallenge(challenge._id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Join Challenge
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinChallengesPage;
