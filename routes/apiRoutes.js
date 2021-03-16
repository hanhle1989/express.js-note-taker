// const dbJSON = require('./db/db.json');
const fs = require('fs');
// const uuid using npm uuid
const { v4: uuidv4 } = require('uuid');

// API Routing: 
// saving and displaying notes
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));0.
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


    // deleting note option
    app.delete('/api/notes/:id', (req, res) => {
        const noteId = req.params.id;
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            const notes = JSON.parse(data);
            if (err) { console.err(err) }
            else {
                for (let i = 0; i < notes.length; i++) {
                    if (noteId === notes[i].id) {
                        notes.splice([i], 1)
                        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                            if (err) throw err;
                            res.json(notes);
                            console.log("Note has been deleted");
                        });
                    }
                }
            }
        });
    });

}
