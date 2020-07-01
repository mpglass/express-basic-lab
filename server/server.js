const express = require("express");
const path = require("path");
const fs = require("fs");

let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.post("/sign", (req, res) => {
  fs.readFile(path.join(__dirname, "./data/names.json"), (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ msg: "Lady ate my code!" });
    }
    const names = JSON.parse(data);
    names.push({ name: req.body.name });
    res.send("file has been read")
  });
  fs.writeFile(
    path.join(__dirname, "./data/names.json"),
    JSON.stringify(names, null, 2),
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ msg: "Lady ate my code!" });
      }
      res.send("Thank you " + req.body.name + " for adding your name.");
    }
  );
});



// app.post('/formSubmissions/guests.json', (req, res) => {
//     console.log(req.body.email);
//     console.log(req.body.name);
//     res.send('Thank you for signing the guest log.');
// });

app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("Server is running");
});
