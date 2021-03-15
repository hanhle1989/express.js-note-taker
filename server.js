const express = require("express");
const app = express ();
const dbJson = require("./db/db.json");
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);  


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));