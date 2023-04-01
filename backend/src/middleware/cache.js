const cache = require("memory-cache");

const cacheMiddleware = (duration) => {
  return (req, res, next) => {
    const key = "__express__" + req.originalUrl || req.url;
    const cachedBody = cache.get(key);
    if (cachedBody) {
      res.send(JSON.parse(cachedBody));
      return;
    }
    res.originalSend = res.send;
    res.send = (body) => {
      cache.put(key, body, duration * 1000);
      res.originalSend(body);
    };
    next();
  };
};

module.exports = cacheMiddleware;
