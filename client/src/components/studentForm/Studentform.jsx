import React, { useState } from "react";
import toast from "react-hot-toast";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    schedule: [
      { subject: "Math", day: "Monday", slot: "4:00pm" },
      { subject: "English", day: "Tuesday", slot: "5:00pm" },
      { subject: "History", day: "Wednesday", slot: "6:00pm" },
      { subject: "Science", day: "Thursday", slot: "7:00pm" },
    ],
    assignedVolunteer: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleScheduleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSchedule = formData.schedule.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setFormData((prevData) => ({
      ...prevData,
      schedule: updatedSchedule,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Student form data:", formData);
    console.log("User ID:", user);
    console.log("User ID:", user._id.toString());
    try {
      const response = await fetch(
        "http://localhost:8000/api/leader/student/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-user-id": user._id,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Student created successfully", await response.json());
        toast.success("Student created successfully");
        setFormData({
          student_ID: "",
          name: "",
          schedule: [{ subject: "", day: "", slot: "" }],
          assignedVolunteer: "",
          lastVolunteer: "",
          lastBrief: [{ date: "", content: "" }],
        });
      } else {
        console.error("Failed to create student", await response.json());
      }
    } catch (error) {
      console.error("An error occurred while creating the student", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
      </div>

      {formData.schedule.map((scheduleItem, index) => (
        <div key={index} className="space-y-2">
          <div className="flex flex-col">
            <label htmlFor={`subject-${index}`} className="mb-1">
              Subject
            </label>
            <input
              type="text"
              id={`subject-${index}`}
              name="subject"
              value={scheduleItem.subject}
              onChange={(e) => handleScheduleChange(index, e)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor={`day-${index}`} className="mb-1">
              Day
            </label>
            <input
              type="text"
              id={`day-${index}`}
              name="day"
              value={scheduleItem.day}
              onChange={(e) => handleScheduleChange(index, e)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor={`slot-${index}`} className="mb-1">
              Slot
            </label>
            <input
              type="text"
              id={`slot-${index}`}
              name="slot"
              value={scheduleItem.slot}
              onChange={(e) => handleScheduleChange(index, e)}
              className="border p-2 rounded"
            />
          </div>
        </div>
      ))}

      <div className="flex flex-col">
        <label htmlFor="assignedVolunteer" className="mb-1">
          Assigned Volunteer
        </label>
        <input
          type="text"
          id="assignedVolunteer"
          name="assignedVolunteer"
          value={formData.assignedVolunteer}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
