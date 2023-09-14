const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Carpeta donde se almacenarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
