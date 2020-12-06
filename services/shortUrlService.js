const { saveUrl } = require("./urlEntityService");
const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&$');

module.exports = {
  shortUrl: async (req, res) => {
    let { url } = req.body;
    if (url === null || url == "") {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const data = {
      url,
      shortUrl: shortid.generate()
    }
    const savedData = saveUrl(data);

    return res.status(200).json({
      url,
      shortUrl: savedData.shortUrl
    });
  },
};
