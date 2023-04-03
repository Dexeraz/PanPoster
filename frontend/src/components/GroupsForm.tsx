import React, { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import { postToGroups } from "./../api";

interface GroupFormProps {}

const GroupForm: React.FC<GroupFormProps> = () => {
  const [groupIds, setGroupIds] = useState("");
  const [message, setMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (message.trim() === "") {
      setStatusMessage("Post content must not be empty.");
      setLoading(false);

      return;
    } else if (groupIds.trim() === "") {
      setStatusMessage("Please input group IDs.");
      setLoading(false);

      return;
    }

    const parsedGroupIds = groupIds.split(",").map((id) => id.trim());
    const data = {
      groupIds: parsedGroupIds,
      message,
      accessToken,
    };

    const response = await postToGroups(data); // Use postToGroups instead of onSubmit
    setStatusMessage(response.message);
    setLoading(false);
  };

  return (
    //
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 min-w-[50%]">
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
          disabled={loading}
        >
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
        <p className="mt-4 text-gray-900 dark:text-gray-400">{statusMessage}</p>
      </form>
    </div>
  );
};

export default GroupForm;
