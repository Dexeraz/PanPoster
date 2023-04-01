const request = require("../utils/request");

const postToGroup = async (groupId, message, accessToken) => {
  const API_URL = `https://graph.facebook.com/v12.0/${groupId}/feed`;

  try {
    const response = await request.post(API_URL, {
      json: {
        message: message,
        access_token: accessToken,
      },
    });

    console.log("Successfully posted to group:", response);
    return response;
  } catch (error) {
    console.error("Error posting to group:", error.message);
    throw error;
  }
};

module.exports = {
  postToGroup,
};
