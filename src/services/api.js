import axios from "axios";

const API = axios.create({
  baseURL: "https://lecture-scheduling-backend-cj8a.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// AUTH
export const loginUser = (data) =>
  API.post("/auth/login", data);

// COURSES
export const getCourses = () =>
  API.get("/courses");

// USERS
export const getUsers = () =>
  API.get("/users");

// LECTURES
export const getLectures = () =>
  API.get("/lectures");

export const assignLecture = (data) =>
  API.post("/lectures/create", data);

export const getMyLectures = () =>
  API.get("/lectures/my-lectures");

export const deleteLecture = (id) =>
  API.delete(`/lectures/${id}`);

export default API;

