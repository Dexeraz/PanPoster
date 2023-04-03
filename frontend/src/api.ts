import axios, { AxiosError, AxiosResponse } from "axios";

export const postToGroups = async (data: {
  groupIds: string[];
  message: string;
  accessToken: string;
}): Promise<{ status: number; message: string }> => {
  try {
    const response = await axios.post("http://3.142.42.91:3000/post-to-groups", data);

    return { status: response.status, message: response.data.message };
  } catch (error) {
    console.error("Error posting to groups:", error);

    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || "Unknown error",
      };
    } else {
      return { status: 500, message: "Unknown error" };
    }
  }
};
