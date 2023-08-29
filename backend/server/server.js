const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Y ahora como conecto esto a mi proyecto con react?")
})

app.listen(PORT, () => {
    console.log(`Server listening on http:localhost:${PORT}`);
  })