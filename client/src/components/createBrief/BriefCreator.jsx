import React, { useState, useEffect } from "react";
import axios from "axios";

const BriefComponent = () => {
  const [content, setContent] = useState("");
  const [briefs, setBriefs] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const userId = localStorage.getItem("userId");
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreateBrief = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/createBrief",
        {
          content,
          headers: {
            "Content-Type": "application/json",
            "x-user-id": userId,
          },
        }
      );
      setSuccess(response.data.message);
      setError("");
      fetchBriefs();
    } catch (err) {
      setError(err.response.data.message);
      setSuccess("");
    }
  };

  const fetchBriefs = async () => {
    try {
      const response = await axios.get("/api/briefs");
      setBriefs(response.data.briefs);
    } catch (err) {
      setError(err.response.data.message);
      setSuccess("");
    }
  };

  useEffect(() => {
    fetchBriefs();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Create a Brief
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={content}
          onChange={handleContentChange}
          placeholder="Enter brief content"
        />
        <button
          onClick={handleCreateBrief}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Submit
        </button>
        {success && <p className="text-green-500 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Previous Briefs</h2>
        {briefs.length === 0 ? (
          <p>No briefs found.</p>
        ) : (
          <ul className="list-disc list-inside">
            {briefs.map((brief, index) => (
              <li key={index} className="mb-2">
                <p className="text-gray-700">
                  <span className="font-bold">Date:</span>{" "}
                  {new Date(brief.date).toLocaleString()}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Content:</span> {brief.content}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BriefComponent;
