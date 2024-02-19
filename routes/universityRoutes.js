const express = require("express");
const router = express.Router();
const universityController = require("../controllers/universityController");

router.get("/search", universityController.searchUniversities);
router.post("/favorite", universityController.saveFavoriteUniversity);
router.get("/favorites", universityController.getFavoriteUniversities);

module.exports = router;
