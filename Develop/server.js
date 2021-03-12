const express = require("express");
const path = require('path');
const app = express ();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "./public/"));
app.use(express.json());

app.get("/api/notes", (req,res)=>res.json(notes));       


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));