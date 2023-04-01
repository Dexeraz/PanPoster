const express = require("express");
const router = express.Router();
//test 1

router.post("/", async (req, res) => {
    const { groupIds, message, accessToken } = req.body;
  
    const promises = groupIds.map(async (groupId) => {
      try {
        const response = await postToGroup(groupId, message, accessToken);
        console.log(`Posted to group ${groupId}:`, response);
        return { groupId, success: true };
      } catch (error) {
        console.error(`Error posting to group ${groupId}:`, error.message);
        return { groupId, success: false, error: error.message };
      }
    });
  
    const results = await Promise.all(promises);
    const failedPosts = results.filter((result) => !result.success);
  
    if (failedPosts.length > 0) {
      res.status(400).json({
        message: "Some posts failed.",
        failedPosts,
      });
    } else {
      res.json({ message: "Successfully posted to groups." });
    }
  });

  module.exports = router;

  