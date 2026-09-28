const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadVideo = async () => {
  try {
    const res = await cloudinary.uploader.upload(
      'd:/Demo1/frontend/src/components/4k-free-stock-video-studying-education-and-learning-ytmp4.savetube.vip.mp4',
      { resource_type: "video", public_id: "start_learning_video" }
    );
    console.log("Upload successful:", res.secure_url);
  } catch (err) {
    console.error("Upload failed:", err);
  }
};

uploadVideo();
