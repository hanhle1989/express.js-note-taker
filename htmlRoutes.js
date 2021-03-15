const path = require("path");

module.exports = function(app) {
  app.get("/notes", function(req, res) {
    res.sendFile(__dirname + '/public/notes.html')
  });

  app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
  });

  app.get("*", function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
  });
};
