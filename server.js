const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
