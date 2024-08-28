import axios from "axios";
import { BASE_URL } from "./base-url";
import api from "../interceptors/interceptor";

let token = localStorage.getItem("access_token");
const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    token: `Bearer ${token}`,
  },
};
const headersformData = {
  headers: {
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
    token: `Bearer ${token}`,
  },
};

export const signUp = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}auth/sign-up`, data);
    return res;
  } catch (e) {
    return e;
  }
};
export const login = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}auth/login`, data);
    return res;
  } catch (e) {
    return e;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}users`);
    return res;
  } catch (e) {
    return e;
  }
};

export const addTask = async (data) => {
  try {
    const res = await api.post(`${BASE_URL}tasks`, data);
    return res;
  } catch (e) {
    return e;
  }
};
export const getAlltasks = async () => {
  try {
    const res = await api.get(`${BASE_URL}tasks`);
    return res;
  } catch (e) {
    return e;
  }
};

export const getSingleTask = async (id) => {
  try {
    const res = await api.get(`${BASE_URL}tasks/${id}`);
    return res;
  } catch (e) {
    return e;
  }
};

export const editTask = async (data, id) => {
  try {
    const res = await api.patch(`${BASE_URL}tasks/${id}`, data);
    return res;
  } catch (e) {
    return e;
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await api.delete(`${BASE_URL}tasks/${id}`);
    return res;
  } catch (e) {
    return e;
  }
};

export const getFilteredtasks = async (type) => {
  try {
    const res = await api.get(`${BASE_URL}tasks/status/${type}`);
    return res;
  } catch (e) {
    return e;
  }
};
