const axios = require("axios");
const University = require("../models/universityModel");

const sendJSONResponse = (res, status, data) => {
  res.status(status).json(data);
};

exports.searchUniversities = async (req, res) => {
  try {
    const response = await axios.get(
      "http://universities.hipolabs.com/search?name=middle"
    );
    const universities = response.data;

    sendJSONResponse(res, 200, universities);
  } catch (error) {
    console.error(error);
    sendJSONResponse(res, 500, {
      message: "Failed to fetch universities from API"
    });
  }
};

exports.saveFavoriteUniversity = (req, res) => {
  const { name, state, webPage } = req.body;

  University.saveFavorite(name, state, webPage, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to save favorite university" });
    } else {
      res.json(result);
    }
  });
};

exports.getFavoriteUniversities = (req, res) => {
  University.getAllFavorites((err, results) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Failed to fetch favorite universities" });
    } else {
      res.render("pages/favorites", { favorites: results });
    }
  });
};
