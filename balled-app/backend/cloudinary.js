const { v2: cloudinary } = require("cloudinary");
require("dotenv").config();

const configured = !!(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

if (configured) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
} else {
  console.warn("Cloudinary is not configured. Image uploads will be unavailable until its environment variables are added.");
}

function uploadBuffer(buffer, mimetype) {
  if (!configured) return Promise.reject(new Error("Cloudinary n'est pas configuré."));
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "balled/listings", resource_type: "image" },
      (error, result) => error ? reject(error) : resolve(result)
    );
    stream.end(buffer);
  });
}

async function deleteImage(publicId) {
  if (!configured || !publicId) return;
  try { await cloudinary.uploader.destroy(publicId, { resource_type: "image" }); }
  catch (err) { console.warn("Cloudinary delete failed:", err.message); }
}

module.exports = { uploadBuffer, deleteImage, configured };
