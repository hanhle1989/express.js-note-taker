const fs = require("fs");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data);
      res.send(dbData);
    });
  });


app.post("/api/notes", function(req, res) {
  const newNotes = req.body;

  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    dbData = JSON.parse(data);
    dbData.push(newNotes);
    let number = 1;
    dbData.forEach((note, index) => {
      note.id = number;
      number++;
      return dbData;
    });
    console.log(dbData);

    stringData = JSON.stringify(dbData);

    fs.writeFile('./db/db.json', stringData, (err, data) => {
      if (err) throw err;
    });
  });
  res.send('Your note has been saved');
});

}