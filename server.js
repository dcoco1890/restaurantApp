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

app.get(`/api/waitlist`, function(req, res) {
    return res.json(reserveList);
});

app.get(`/api/tables`, function(req, res) {
    return res.json(tableList);
});

app.get(`/`, function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get(`/tables`, function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get(`/reserve`, function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get(`/home`, function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.post(`/api/tables`, function(req, res) {
    var newData = req.body;

    if (tableList.length < 5) {
        tableList.push(newData);
        res.json(true);
    } else {
        reserveList.push(newData);
        res.json(false);
    }
});





// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "view.html"));
// });