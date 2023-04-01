import React from 'react';
import axios, { AxiosResponse } from 'axios';
import GroupForm from './components/GroupsForm';

function App() {
  const handleSubmit = async (data: {
    groupIds: string[];
    message: string;
    accessToken: string;
  }) => {
    return new Promise<AxiosResponse>(async (resolve, reject) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/post-to-groups",
          data
        );

        console.log(response.data);
        resolve(response);
      } catch (error) {
        console.error("Error posting to groups:", error);
        reject(error);
      }
    });
  };

  return (
    <div className="App">
      <GroupForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
