import React, { useState } from "react";
import axios from "axios";

const ChallengeCreation = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    goal: "",
    duration: 0,
    difficultyLevel: "",
    progressTracking: "",
    progress: 0
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const token = localStorage.getItem("token");

    try {
      
      await axios.post("http://localhost:5000/api/challenges/createChallenge", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess("Challenge created successfully!");
      setFormData({ title: "", description: "", startDate: "", endDate: "", goal: "", duration: 0, difficultyLevel: "", progressTracking: ""});
    } catch (err) {
      setError("Failed to create challenge. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create a New Challenge</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Goal</label>
            <input
                type="text"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
                placeholder="e.g., Run 50 km in a month"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Progress Tracking</label>
            <select
                name="progressTracking"
                value={formData.progressTracking}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-white"
            >
                <option value="">Select Method</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2">Difficulty Level</label>
            <select
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded bg-white"
            >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Creating..." : "Create Challenge"}
        </button>
      </form>

      {success && <p className="text-green-500 mt-4">{success}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default ChallengeCreation;
