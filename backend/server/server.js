const express = require("express");
const app = express();
const db = require('./db'); // Importa la conexión a la base de datos

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Y ahora como conecto esto a mi proyecto con react?")
})

app.listen(PORT, () => {
    console.log(`Server listening on http:localhost:${PORT}`);
  })

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

  app.post('/subirArchivo', upload.single('archivo'), (req, res) => {
    const { originalname } = req.file; 
  })