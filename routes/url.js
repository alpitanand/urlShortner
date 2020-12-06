const { Router } = require("express");
const router = Router();
const { shortUrl } = require("../services/shortUrlService");

router.post("/", shortUrl);

module.exports = router;
