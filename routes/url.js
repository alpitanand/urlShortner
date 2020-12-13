const { Router } = require("express");
const router = Router();
const { shortUrl, redirectToNewUrl } = require("../services/shortUrlService");

router.post("/", shortUrl);

router.get("/:newUrl",redirectToNewUrl)

module.exports = router;
