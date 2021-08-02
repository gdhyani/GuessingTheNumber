const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var guessedList = [0];
var compGuess = Math.floor(Math.random() *100);


app.get('/', function (req, res){
    res.render("home",{
        guessedListt:guessedList[guessedList.length -2],
        guessedList:guessedList,
        compGuess:compGuess
    });
    console.log(compGuess);
});

app.get("/home", function(req, res){
    res.redirect("/");
})

app.post("/", function(req, res){

    guessedList.push( req.body.guess__number);
    res.redirect("/");
    if(compGuess == guessedList[guessedList.length -2]){
        
    }else{

    }
})

app.listen(process.env.PORT||3000, function(){
    console.log("Server Listening to Port 3000");
});