import React from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import GroupForm from "./components/GroupsForm";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const handleSubmit = async (data: {
    groupIds: string[];
    message: string;
    accessToken: string;
  }): Promise<{ status: number; message: string }> => {
    try {
      const response = await axios.post(
        "http://localhost:3000/post-to-groups",
        data
      );

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

  return (
    <div className="">
      <Navbar />
      <div className="App flex flex-col min-h-screen bg-gray-900">
        <div className="flex-grow flex flex-col">
          <Hero />
          <div className="flex-grow flex items-center justify-center">
            <GroupForm onSubmit={handleSubmit} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
