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
