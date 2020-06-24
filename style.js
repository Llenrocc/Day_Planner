// Creating my variables

var $currentDay = $("#currentDay");
var $schedule = $(".schedule");
var $timeBlock = $(".time-block");

var toDos = [];

// format for current date and hour using moment.js
var currentDate = moment().format("dddd, MMM Do");
var currentHour = moment().format("H");