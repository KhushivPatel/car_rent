import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

const CommentForm = ({ updateCommentCount }) => {
  const collectionRef = collection(db, "Comment");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the form data to the 'Comment' collection in Firestore
      await addDoc(collectionRef, {
        Name: formData.name,
        Email: formData.email,
        Message: formData.message,
      });

      toast.success("Message submitted successfully");
      // Clear the form after submission
      setFormData({ name: "", email: "", message: "" });

      // Update the comment count by calling the function from props
      updateCommentCount();
    } catch (error) {
      console.error("Error submitting message:", error);
      toast.error("Failed to submit message. Please try again.");
    }
  };

  return (
    <div className="max-w-[95%] mx-auto my-8 justify-start py-3 px-5 items-start">
      <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium dark:text-white text-gray-700"
          >
            Comment
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Comment"
            className="mt-1 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="">
          <label
            htmlFor="name"
            className="block text-lg font-medium dark:text-white text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mt-1 block w-full h-9 bg-gray-200 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium dark:text-white text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-1 block w-full h-9 bg-gray-200 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
