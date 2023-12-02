const multer = require('multer');

const AWS = require('aws-sdk');

const upload = multer({ dest: 'uploads/' });
const s3 = new AWS.S3();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Hàm upload ảnh lên S3
const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: file.originalname, // Tên file trên S3 sẽ giống tên file gốc
    Body: file.buffer,
    ACL: 'public-read', // Đảm bảo ảnh có thể truy cập công khai
  };

  try {
    const result = await s3.upload(params).promise();
    return result.Location; // Trả về URL của ảnh đã upload
  } catch (error) {
    console.error('Failed to upload image:', error);
    throw error;
  }
};

// // Route để xử lý upload ảnh
// app.post('/upload', upload.single('image'), async (req, res) => {
//   const file = req.file;

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   try {
//     const imageUrl = await uploadImageToS3(file);
//     res.status(200).json({ imageUrl });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to upload image' });
//   }
// });
