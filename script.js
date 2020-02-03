var currentDay = document.getElementById('currentDay');
var saveB = document.getElementsByClassName('saveBtn');
var textAreas = document.getElementsByClassName('content');

// display time in the header section
function getDateAndTime(){
    let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    currentDay.innerHTML = dateAndTime;
}

var nineAM = document.getElementById('9a');
var tenAM = document.getElementById('10a');
var elevenAM = document.getElementById('11a');
var twelvePM = document.getElementById('12p');
var onePM = document.getElementById('1p');
var twoPM = document.getElementById('2p');
var threePM = document.getElementById('3p');
var fourPM = document.getElementById('4p');
var fivePM = document.getElementById('5p');