const Contact = require("../models/Contact");

// Handle Contact Form Submission
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({
      success: true,
      message: "Message submitted successfully!",
      data: newContact,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};