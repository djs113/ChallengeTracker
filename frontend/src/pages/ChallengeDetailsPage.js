import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/api";

const ChallengeDetailsPage = () => {
  const { id } = useParams(); // Get the challenge ID from the URL
  const [challenge, setChallenge] = useState(null);
  const [progress, setProgress] = useState(0);

  const incrementProgress = async () => {
    try {
      const response = await API.put(`/challenges/${id}/progress`);
      if (response.data.message) {
        alert(response.data.message);
      } else {
        setProgress(response.data.progress);
      }      
    } catch (error) {
      console.error(error);
    }
  };

  const deleteChallenge = async () => {
    try {
      const response = await API.delete(`/challenges/deleteChallenge/${id}`);
      if (response.data.message) 
        alert(response.data.message);   
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await API.get(`/challenges/${id}`);
        setChallenge(response.data);
        setProgress(response.data.progress);
        
      } catch (error) {
        console.error("Error fetching challenge:", error);
      }
    };

    fetchChallenge();
  }, [id]);

  if (!challenge) {
    return <p>Loading...</p>;
  }
  
  return (
    <>
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
      <p><strong>Description:</strong> {challenge.description}</p>
      <p><strong>Start Date:</strong> {new Date(challenge.startDate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(challenge.endDate).toLocaleDateString()}</p>
      <p><strong>Goal:</strong> {challenge.goal}</p>
      <p><strong>Difficulty Level:</strong> {challenge.difficultyLevel}</p>
      <p><strong>Progress:</strong> {progress} / {challenge.duration}</p>
    </div>
    <button
          onClick={incrementProgress}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-4"
        >
          Increase Progress by 1 Day
    </button>
    <button
          onClick={deleteChallenge}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete Challenge
    </button>
    </>
  );
};

export default ChallengeDetailsPage;
