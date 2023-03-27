import React, { useState } from 'react';
import axios from 'axios';

interface GroupFormProps {
  onSubmit: (data: any) => void;
}

const GroupForm: React.FC<GroupFormProps> = ({ onSubmit }) => {
  const [groupIds, setGroupIds] = useState('');
  const [message, setMessage] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      groupIds: groupIds.split(',').map(id => id.trim()),
      message,
      accessToken,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="groupIds">Group IDs (comma separated):</label>
        <input
          type="text"
          id="groupIds"
          value={groupIds}
          onChange={(e) => setGroupIds(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="accessToken">Access Token:</label>
        <input
          type="text"
          id="accessToken"
          value={accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GroupForm;