const express = require("express");
const app = express();
const cors = require("cors");

const rateLimit = require("./middleware/rateLimit");
const cacheMiddleware = require("./middleware/cache");

const postToGroupsRoute = require("./routes/postToGroup"); 

app.use(express.json());
app.use(cors());

// Apply rate limiting to all routes
app.use(rateLimit);

// Use cache middleware on the postToGroups route
app.use("/post-to-groups", cacheMiddleware(60), postToGroupsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
