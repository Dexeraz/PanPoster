import React from "react";
import GroupForm from "./components/GroupsForm";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="App flex flex-col min-h-screen bg-gray-900">
        <div className="flex-grow flex flex-col">
          <Hero />
          <div className="flex-grow flex items-center justify-center mb-12">
            <GroupForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
