// const dbJSON = require('./db/db.json');
const fs = require('fs');

//API Routing: 
module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.writeFile('../db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(JSON.parse(data));
                console.log("New note has been saved");
            }

        })
    })

    app.post('/api/notes', (req, res) => {
        let savedNotes = req.body;
        savedNotes.id = Date.now().toString;

        fs.readFile('../db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                var postNotes = JSON.parse(data)
                postNotes.push(savedNotes);

            };
        });
    })
}