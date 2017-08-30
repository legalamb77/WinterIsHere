var express        = require("express"),
    app            = express();

app.get("/", function(req, res){
    res.render("index.ejs");
});

//start server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Winterishere has started!");
});