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
    <form
      onSubmit={handleSubmit}
      className="text-white p-4 rounded shadow-md space-y-4 w-full max-w-md bg-gray-800 m-6"
    >
      <InputField
        label="Group IDs (separated with comma):"
        id="groupIds"
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
        value={accessToken}
        onChange={(e) => setAccessToken(e.target.value)}
      />
      <button
        type="submit"
        className="self-end px-4 py-2 font-semibold bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-200"
      >
        Submit
      </button>
      <p className="mt-4 text-white">{statusMessage}</p>
    </form>
  );
};

export default GroupForm;
