const express = require("express");
const app = express ();
const dbJson = require("./Develop/db/db.json");
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./Develop/public"));
app.use(express.json());

require("./Develop/apiRoutes")(app);
require("./Develop/htmlRoutes")(app);  


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));