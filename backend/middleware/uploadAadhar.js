// const multer = require('multer');
// const path = require('path');

// // Configure storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
//     },
// });

// // Filter file type
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/')) {
//         cb(null, true);
//     } else {
//         cb(new Error('Only images or PDFs are allowed'), false);
//     }
// };

// module.exports = multer({ storage, fileFilter });
