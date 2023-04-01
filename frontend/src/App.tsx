import React from 'react';
import axios from 'axios';
import GroupForm from './components/GroupsForm';

function App() {
  const handleSubmit = async (data: { groupIds: string[]; message: string; accessToken: string }) => {
    try {
      // Backend Url
      const response = await axios.post('http://localhost:3000/post-to-groups', data);

      console.log(response.data);
    } catch (error) {
      console.error('Error posting to groups:', error);
    }
  };

  return (
    <div className="App">
      <GroupForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
