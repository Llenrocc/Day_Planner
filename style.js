// Creating my variables

var $currentDay = $("#currentDay");
var $schedule = $(".schedule");
var $timeBlock = $(".time-block");

var toDos = [];

// format for current date and hour using moment.js

var currentDate = moment().format("dddd, MMM Do");
var currentHour = moment().format("H");

// Added function - to set up array

function initializeSchedule() {

// added a "for each" for the time-blocks, and variables for those blocks. Setting to do hour to same as data hour.
    $timeBlock.each(function() {
        var $thisBlock = $(this);
        var $thisBlockHr = pareInt($thisBlock.attr("data-hour"));
        var toDosObj = {
            hour: $thisBlockHr,
            text: "",
        }
        toDos.push(toDosObj); //push toDosObj to the array
    });
}

// We must save array to local storage 

localStorage.setItem("toDos", JSON.stringify(toDos));

// Associating the time-block colors depending on the time of day

function setUpTimeBlocks() {
    $timeBlocks.each(function() {
        var $thisBlock = $(this); // (this) refers to global scope - 
        var $thisBlock = parseInt($thisBlock.attr("data-hour")); // coerce thisBlock string back to a number - add attr

// style the time blocks with grey, red, or green depending on time
        
        if (thisBlockHr === currentHour) {                  // this is true - block hour equals current hour
            $thisBlock.addClass("present").removeClass("past future");
        }
        if (thisBlockHr < currentHour) {                    // if current hour is greater than block hour, add past class and remove present/future
            $thisBlock.addClass("past").removeClass("present future");
        }
        if (thisBlockHr > currentHour) {                    // if this block hr is greater than current hour - add future class, remove past/present
            $thisBlock.addClass("future").removeClass("past present");
        }
    });
}

// Adding render function to run schedule

function renderSchedule() {
    toDos = localStorage.getItem("toDos");                  // Save toDos to local storage. Coerce toDos string to number
    toDos = JSON.parse("toDos");

// loop through the away, assign text to the time-block. Data hour has to equal hour.

for (var i = 0; i < toDos.length, i++) {                    
    var itemHour = toDos[i].hour;
    var itemText = toDos[i]. text;

    $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);    // make variable. data-hour = hour.
}
//console.log(toDos);
}

