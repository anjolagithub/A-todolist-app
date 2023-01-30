//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",  function (req, res) {

    var today = new Date();
    var currentDay = today.getDay(); 
    var day = "";

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    console.log(today.toLocaleDateString("en-US", options));

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;

    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error: Current day is equal to: " + currentDay);
    // }


    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";
        //res.sendFile(__dirname + "/weekend.html");
        //res.render("list", { kindOfDay: });
        
    } else { 
        day = "Weekday"; 
       // res.sendFile(__dirname + "/weekday.html");
    }

    res.render("list", {
        kindOfDay: day,
        newListItems: items,
    });

});

app.post("/", function (req, res) {
    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
    
});

app.listen(3000, function () {
    console.log("Server is running on port 3000 ")
});

// write a for loop  "<li> <%= newListItem %></li>" ?        
