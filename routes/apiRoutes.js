// const dbJSON = require('./db/db.json');
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

//API Routing: 
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(JSON.parse(data));
                console.log("New note has been saved");
            }
        });
    });

    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        newNote.id = uuidv4();
        fs.readFile('./db/db.json', (err, data) => {
            if (err) {
                console.log(err);
                let notes = JSON.parse(data);
                notes.push(notesTaken);
                fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    res.json(notes);
                });
            };
        })
    });
};