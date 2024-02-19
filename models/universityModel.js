// models/universityModel.js
const db = require('../config/db');

const University = {
  saveFavorite: (name, state, webPage, callback) => {
    db.query('INSERT INTO favorite_universities (name, state, web_page) VALUES (?, ?, ?)', [name, state, webPage], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    });
  },
  getAllFavorites: (callback) => {
    db.query('SELECT * FROM favorite_universities', (err, results) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, results);
    });
  }
};

module.exports = University;
