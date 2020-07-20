const express = require("express");

const app = express();

app.use(express.json({ extended: true }));

app.get("/download", function (req, res) {
  console.log(req.query.name)
  const file = req.query.name;
  if (!file) return res.send("there is no such file")
  const filePath = __dirname + "/files/" + file;

  res.download(filePath, file);
});
app.get("**", (_, res) => res.send("backend is working..."));

app.listen(2999, () =>
  console.log("app is listening at http://localhost:2999")
);
