import React, { useState } from "react";

interface GroupFormProps {
  onSubmit: (data: any) => Promise<void>;
}

const GroupForm: React.FC<GroupFormProps> = ({ onSubmit }) => {
  const [groupIds, setGroupIds] = useState("");
  const [message, setMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!groupIds || !message || !accessToken) {
      setStatusMessage("Please fill in all the fields.");
      return;
    }

    try {
      await onSubmit({
        groupIds: groupIds.split(",").map((id) => id.trim()),
        message,
        accessToken,
      });
      setStatusMessage("Successfully posted to groups.");
    } catch (error) {
      setStatusMessage("Error posting to groups: " + error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="groupIds">Group IDs (separated with comma):</label>
        <input
          type="text"
          id="groupIds"
          value={groupIds}
          onChange={(e) => setGroupIds(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Post content:</label>
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
      <p className="mt-4 text-white">{statusMessage}</p>
    </form>
  );
};

export default GroupForm;
