// const dbJSON = require('./db/db.json');
const fs = require('fs');

//API Routing: 
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notesJSON));
    fs.writeFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(JSON.parse(data));
            console.log("New note has been saved");
        }
    })
}

app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const newNote = req.body;
        console.log(req.body);
        tempArray.push(newNote);
        console.log("POST request Started");
        console.log(tempArray);
        addNoteToDb(JSON.stringify(tempArray));
        res.json(req.body);
    });
});