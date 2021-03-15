// const dbJSON = require('./db/db.json');
const fs = require("fs");

//API Routing: 
module.exports = (app) => {
    let noteList = fs.readFileSync('./db/db.json', 'utf8');
    notesJSON = JSON.parse(noteList)
    const tempArray = notesJSON;

    app.get('/api/notes', (req, res) => res.json(notesJSON));

    function addNoteToDb (note) {
        fs.writeFile("db/db.json", note,(err) =>{
        if (err){
            console.log(err);
        } else {
            console.log("New note has been saved");
        }

        noteList.push(req.body);
        console.log('noteList :>> ', noteList);
        res.json(noteList.slice(-1));
    });
    }
    
    app.post('/api/notes', (req,res) => {
        const newNote = req.body;
        console.log(req.body);
        tempArray.push(newNote);
        console.log("POST request Started");
        console.log(tempArray);
        addNoteToDb (JSON.stringify(tempArray));
        res.json(req.body);
    });

    // delete note
    app.delete('/api/notes/:id', (req, res) => {
        let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));

        noteList.splice(noteList.indexOf(findNote), 1);
    });
};