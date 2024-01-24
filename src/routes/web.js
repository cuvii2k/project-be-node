//SSR
const express = require("express");
const { getHomePage } = require("../controllers/homeController");
const router = express.Router();
router.get('/', function (req, res) {
  res.render('index.ejs');
});

// about page
router.get('/home',getHomePage);
module.exports = router;