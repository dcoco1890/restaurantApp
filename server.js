var express = require("express");
var path = require("path");



var reserveList = [{
    name: "Herman",
    phone: "706-399-1991",
    email: "loser@gmail.com",
    id: "2"
}];
var tableList = [{
    name: "steve",
    phone: "706-399-1991",
    email: "loser@gmail.com",
    id: "2"
}];


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

});

app.get(`/api/reserve`, function(req, res) {
    return res.json(reserveList);
});

app.get(`/api/tables`, function(req, res) {
    return res.json(tableList);
});



// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "view.html"));
// });

