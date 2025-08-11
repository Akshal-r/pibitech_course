"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [students, setStudents] = useState([]);
  const [brochures, setBrochures] = useState([]);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTab, setSelectedTab] = useState("students");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [modules, setModules] = useState([""]);
  const [courses, setCourses] = useState([]);

  const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin";
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

  const BASE_URL = "https://pibitech-backend.onrender.com";
  const STUDENTS_URL = `${BASE_URL}/students`;
  const BROCHURE_URL = `${BASE_URL}/downloads`;
  const COURSES_URL = `${BASE_URL}/courses`;

  const fetchData = async () => {
    try {
      const [studentsRes, brochureRes, courseRes] = await Promise.all([
        axios.get(STUDENTS_URL),
        axios.get(BROCHURE_URL),
        axios.get(COURSES_URL),
      ]);

      console.log("Fetched Students:", studentsRes.data);
      console.log("Fetched Brochures:", brochureRes.data);
      console.log("Fetched Courses:", courseRes.data);

      setStudents(studentsRes.data);
      setBrochures(brochureRes.data);
      setCourses(courseRes.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (
      loginData.username === ADMIN_USERNAME &&
      loginData.password === ADMIN_PASSWORD
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleModuleChange = (index, value) => {
    const newModules = [...modules];
    newModules[index] = value;
    setModules(newModules);
  };

  const addModule = () => setModules([...modules, ""]);
  const removeModule = (index) =>
    setModules(modules.filter((_, i) => i !== index));

  const handleAddCourse = async () => {
    if (
      !courseName.trim() ||
      !courseDescription.trim() ||
      modules.length === 0
    ) {
      alert("Please fill in all course details and at least one module.");
      return;
    }

    const newCourse = {
      title: courseName,
      description: courseDescription,
      modules: modules.filter((m) => m.trim() !== ""),
    };

    try {
      await axios.post(COURSES_URL, newCourse);
      alert(`Course "${courseName}" added successfully!`);
      setCourseName("");
      setCourseDescription("");
      setModules([""]);
      fetchData();
    } catch (error) {
      console.error("Failed to add course:", error);
      alert("Error saving course. Try again.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="border p-2 mb-2 w-full"
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 mb-4 w-full"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md p-4 border-r">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-3">
          <li
            className={`cursor-pointer hover:text-blue-600 ${
              selectedTab === "students" ? "text-blue-700 font-semibold" : ""
            }`}
            onClick={() => setSelectedTab("students")}
          >
            Registered Students
          </li>
          <li
            className={`cursor-pointer hover:text-blue-600 ${
              selectedTab === "brochures" ? "text-blue-700 font-semibold" : ""
            }`}
            onClick={() => setSelectedTab("brochures")}
          >
            Brochure Downloads
          </li>
          <li
            className={`cursor-pointer hover:text-blue-600 ${
              selectedTab === "courses" ? "text-blue-700 font-semibold" : ""
            }`}
            onClick={() => setSelectedTab("courses")}
          >
            Add Course
          </li>
          <li
            className="cursor-pointer text-red-600 hover:underline"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Welcome Admin</h1>

        {selectedTab === "students" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Registered Students</h2>
            {students.length > 0 ? (
              <table className="min-w-full text-sm border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, i) => (
                    <tr key={i} className="hover:bg-gray-50 text-center">
                      <td className="px-4 py-2 border">{s.name}</td>
                      <td className="px-4 py-2 border">{s.email}</td>
                      <td className="px-4 py-2 border">{s.phone || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No students registered yet.</p>
            )}
          </section>
        )}

        {selectedTab === "brochures" && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Brochure Downloads</h2>
            {brochures.length > 0 ? (
              <table className="min-w-full text-sm border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {brochures.map((b, i) => (
                    <tr key={i} className="hover:bg-gray-50 text-center">
                      <td className="px-4 py-2 border">{b.name}</td>
                      <td className="px-4 py-2 border">{b.email}</td>
                      <td className="px-4 py-2 border">{b.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No brochures downloaded yet.</p>
            )}
          </section>
        )}

        {selectedTab === "courses" && (
          <section className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Course Title"
              className="border p-2 mb-4 w-full"
            />
            <textarea
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              placeholder="Course Description"
              className="border p-2 mb-4 w-full"
              rows={3}
            />
            {modules.map((mod, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Module ${idx + 1}`}
                  className="border p-2 flex-1"
                  value={mod}
                  onChange={(e) => handleModuleChange(idx, e.target.value)}
                />
                <button
                  onClick={() => removeModule(idx)}
                  className="text-red-600 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={addModule}
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
              + Add Module
            </button>
            <button
              onClick={handleAddCourse}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full mt-4"
            >
              Submit Course
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
