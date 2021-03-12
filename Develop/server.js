const express = require("express");
const app = express ();
const PORT = process.env.PORT || 5000;

// set static folder
app.use(express.static("./public/"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));