// const dbJSON = require('./db/db.json');
const fs = require('fs');
// const uuid using npm uuid
const { v4: uuidv4 } = require('uuid');

//API Routing: 
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });

    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        newNote.id = uuidv4();
        fs.readFile('./db/db.json', (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                let notes = JSON.parse(data);
                notes.push(newNote);
                fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                    if (err) throw err;
                    res.json(notes);
                    console.log("New note has been saved");
                });
            }
        });
    });
};
