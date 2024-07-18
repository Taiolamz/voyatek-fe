import axiosInstance from "@/axiosInstance";
import { AxiosResponse } from "axios";

export const createUsers = async (formData: FormPayload): Promise<any> => {
  try {
    const response = await axiosInstance.post("/users", formData);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response: AxiosResponse<User[]> = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchUser = async (userId: string): Promise<User> => {
  try {
    const response = await axiosInstance.get<User>(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Could not fetch user data");
  }
};

export const deleteUser = async (userId: string): Promise<User> => {
  try {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
};
