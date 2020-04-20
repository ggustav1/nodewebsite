const express = require("express");
const fs = require('fs');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// parse application/json
app.use(express.json());

app.use(express.static('public'));

// start server on port 4200
const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
   if (error) {
       console.log('something went wrong with starting the server', error);
   }
    console.log('Server is running on port', server.address().port);
});

// Read the html file
const navbarPage = fs.readFileSync(__dirname + "/public/navbar/navbar.html", "utf8");
const frontPagePage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf8");
const jqueryPage = fs.readFileSync(__dirname + "/public/jquery-examples/jquery-examples.html", "utf8");
const footerPage = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf8");
const nodePage = fs.readFileSync(__dirname + "/public/node-documentation/node.html", "utf8");
const commands = fs.readFileSync(__dirname + "/public/commands/commands.html", "utf8");



app.get("/", (req, res ) => {
    return res.send(navbarPage + frontPagePage + footerPage)
});

app.get("/jquery-examples", (req, res) => {
   return res.send(navbarPage + jqueryPage + footerPage)
});

app.get("/node", (req, res) => {
   return res.send(navbarPage + nodePage + footerPage)
});

app.get("/commands", (req, res) => {
    return res.send(navbarPage + commands + footerPage)
});

