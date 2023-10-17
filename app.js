const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = []; 

app.get("/api/data", (req, res) => {
  res.json(data);
});


app.post("/api/data", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.json(newData);
});


app.delete("/api/data/:id", (req, res) => {
  const id = req.params.id;
  data = data.filter((item, index) => index !== parseInt(id));
  res.send(`Data with id ${id} has been deleted.`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
