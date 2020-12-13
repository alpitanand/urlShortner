const { find } = require("../entity/url");
const Url = require("../entity/url");

module.exports = {
  saveUrl: async (newUrl) => {
    try {
      const savedUrl = await newUrl.save();
      return savedUrl;
    } catch (error) {
      throw new Error(error);
    }
  },

  findBigUrl: async (url) => {
    try {
      const findUrl = await Url.findOne({ bigUrl: url });
      return findUrl;
    } catch (error) {
      throw new Error(error);
    }
  },

  findByShortUrl: async (url) => {
    try {
      const findUrl = await Url.findOne({ tinyUrl: url });
      return findUrl;
    } catch (error) {
      throw new Error(error);
    }
  },
};
