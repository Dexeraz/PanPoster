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
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
      <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-4">
        Share your post!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Group IDs:"
          id="groupIds"
          value={groupIds}
          onChange={(e) => setGroupIds(e.target.value)}
          placeholder="Example: 123456789000005,113355779900005"
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
          className="px-4 py-2 font-semibold bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-500 dark:hover:bg-blue-400 rounded transition-colors duration-200"
        >
          Submit
        </button>
        <p className="mt-4 text-gray-900 dark:text-gray-400">{statusMessage}</p>
      </form>
    </div>
  );
};

export default GroupForm;
