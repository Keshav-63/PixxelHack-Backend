const express = require("express");
const router = express.Router();
const { submitContactForm, getContacts } = require("../controllers/contactController");

// POST /api/contact
router.post("/", submitContactForm);

// GET /api/contact
router.get("/", getContacts);

module.exports = router;