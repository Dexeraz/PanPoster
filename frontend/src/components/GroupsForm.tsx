import React, { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

interface GroupFormProps {
  onSubmit: (data: any) => Promise<{ status: number; message: string }>;
}

const GroupForm: React.FC<GroupFormProps> = ({ onSubmit }) => {
  const [groupIds, setGroupIds] = useState("");
  const [message, setMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedGroupIds = groupIds.split(",").map((id) => id.trim());
    const data = {
      groupIds: parsedGroupIds,
      message,
      accessToken,
    };

    const response = await onSubmit(data);
    setStatusMessage(response.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Group IDs (separated with comma):"
        id="groupIds"
        type="text"
        value={groupIds}
        onChange={(e) => setGroupIds(e.target.value)}
      />
      <TextAreaField
        label="Post content:"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <InputField
        label="Access Token:"
        id="accessToken"
        type="text"
        value={accessToken}
        onChange={(e) => setAccessToken(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p className="mt-4 text-white">{statusMessage}</p>
    </form>
  );
};

export default GroupForm;
