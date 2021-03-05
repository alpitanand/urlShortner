const { saveUrl, findBigUrl, findByShortUrl } = require("./urlEntityService");
const shortid = require("shortid");
const Url = require("../entity/url");
shortid.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&$"
);

module.exports = {
  shortUrl: async (req, res) => {
    try {
      let { url } = req.body;
      if (url === null || url == "") {
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered." });
      }

      const findUrlIfPresent = await findBigUrl(url);
      if (findUrlIfPresent != null) {
        return res.status(200).json(findUrlIfPresent);
      }

      const newUrl = new Url({
        bigUrl: url,
        tinyUrl: shortid.generate(),
      });

      const savedData = await saveUrl(newUrl);
      return res.status(200).json(savedData);
    } catch (error) {
      return res.status(500).json({
        error: "Could not generate the tinyUrl,Please try again",
      });
    }
  },

  redirectToNewUrl: async (req, res) => {
    try {
      const tinyUrl = req.params.newUrl;
      const getBigUrl = await findByShortUrl(tinyUrl);
      console.log(getBigUrl)
      if (getBigUrl != "" && getBigUrl != null) {
        res.redirect(getBigUrl.bigUrl);
      } else {
        return res.status(404).json({ error: "Given url not found" });
      }
    } catch (error) {
      return res.status(500).json({
        error: "Some error occured",
      });
    }
  },
};
