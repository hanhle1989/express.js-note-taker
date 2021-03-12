const express = require("express");
const app = express ();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

require("./develop/routes/apiRoutes")(app);
require(".develop/routes/htmlRoutes")(app);  


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));