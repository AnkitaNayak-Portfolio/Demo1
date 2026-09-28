const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinaryConfig');

// @route   POST /api/upload
// @desc    Upload video to Cloudinary
// @access  Public (You might want to protect this route later)
router.post('/', upload.single('video'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No video file provided' });
    }

    // Return the secure URL of the uploaded video and the public ID
    res.status(200).json({
      message: 'Video uploaded successfully',
      url: req.file.path,
      public_id: req.file.filename,
    });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ message: 'Server error during upload', error: error.message });
  }
});

module.exports = router;
