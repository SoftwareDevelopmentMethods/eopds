const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./src/server/config.env" });
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));

app.use(cors());
app.use(express.json());
app.use(require("./src/server/routes/record"));
// get driver connection
const dbo = require("./src/server/db/conn");

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${port}`);
});