const express = require("express");
const router = express.Router();
const usernameController = require("../controllers/username");
router.get("/", usernameController.getUsername);
router.post("/", usernameController.creatUsername);
module.exports = router;
