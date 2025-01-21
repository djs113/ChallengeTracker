import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const ChallengeDetailsPage = () => {
  const { id } = useParams(); // Get the challenge ID from the URL
  const [challenge, setChallenge] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const deleteChallenge = async () => {
    try {
      const response = await API.delete(`/challenges/deleteChallenge/${id}`);
      if (response.data.message) {
        alert(response.data.message);
        navigate("/get-challenges");
      }   
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching challenge:", error);
        setLoading(false);
      }
    };

    fetchChallenge();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!challenge) {
    return <p>Loading...</p>;
  }
  
  // Calculate progress percentage
  const progressPercentage = (progress) => {
    return Math.min((progress / challenge.duration) * 100, 100);
  };

  const incrementProgress = async () => {
    try {
      const response = await API.put(`/challenges/${id}/progress`);
      if (response.data.message) {
        setProgress(response.data.challenge.progress);
        setChallenge(response.data.challenge);
        alert(response.data.message);
      } else {
        setProgress(response.data.progress);
        setChallenge(response.data);
      }      
    } catch (error) {
      console.error(error);
    }
  };

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
    {/* Progress Bar */}
    <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
      <div
        className="bg-blue-500 h-full text-center text-white"
        style={{ width: `${progressPercentage(progress)}%` }}
      >
        {progressPercentage(progress).toFixed(1)}%
      </div>
    </div>
    { challenge.progressTracking === "Manual" ? (
      <>
        <button
            onClick={incrementProgress}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-4"
          >
            Increase Progress by 1 Day
      </button>
    </>
    ) : (
      null
    )}
    
    <button
            onClick={deleteChallenge}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete Challenge
    </button>
    <br></br>
    {challenge.participants.length > 0 ? (

      challenge.participants.map((participant) => (
        <>
        <h2 className="text-xl font-bold mt-4">{participant.userName}</h2>
        <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
          <div
            className="bg-blue-500 h-full text-center text-white"
            style={{ width: `${progressPercentage(participant.progress)}%` }}
          >
            {progressPercentage(participant.progress).toFixed(1)}%
          </div>
        </div>
        </>
        )
      )
    ) : null
    } 
    </>
  );
};

export default ChallengeDetailsPage;
