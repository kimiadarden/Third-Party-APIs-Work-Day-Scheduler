var currentDay = document.getElementById('currentDay');
var saveB = document.getElementsByClassName('saveBtn');
var textAreas = document.getElementsByClassName('content');

// display time in the header section
function getDateAndTime(){
    var dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
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



var sav9 = document.getElementById('sav9');
function saveNineField (){
  var nineText = nineAM.value;
  localStorage.setItem("nine", nineText);
}
sav9.addEventListener("click", saveNineField);


const sav10 = document.getElementById('sav10');
function saveTenField(){
  var tenAMText = tenAM.value;
  localStorage.setItem("ten", tenAMText);
}
sav10.addEventListener("click", saveTenField);


const sav11 = document.getElementById('sav11');
function saveElevenField(){
  var elevenAMText = elevenAM.value;
  localStorage.setItem("eleven", elevenAMText);
}
sav11.addEventListener("click", saveElevenField);

const sav12 = document.getElementById('sav12');
function saveTwelveField(){
  var twelvePMText = twelvePM.value;
  localStorage.setItem("twelve", twelvePMText);
}
sav12.addEventListener("click", saveTwelveField);

const sav1 = document.getElementById('sav1');
function saveOneField(){
  var onePMText = onePM.value;
  localStorage.setItem("one", onePMText);
}
sav1.addEventListener("click", saveOneField);

const sav2 = document.getElementById('sav2');
function saveTwoField(){
  var twoPMText = twoPM.value;
  localStorage.setItem("two", twoPMText);
}
sav2.addEventListener("click", saveTwoField);

const sav3 = document.getElementById('sav3');
function saveThreeField(){
  var threePMText = threePM.value;
  localStorage.setItem("three", threePMText);
}
sav3.addEventListener("click", saveThreeField);

const sav4 = document.getElementById('sav4');
function saveFourField(){
  var fourPMText = fourPM.value;
  localStorage.setItem("four", fourPMText);
  console.log(localStorage.getItem("four"));
}
sav4.addEventListener("click", saveFourField);

const sav5 = document.getElementById('sav5');
function saveFiveField(){
  var fivePMText = fivePM.value;
  localStorage.setItem("five", fivePMText);
  console.log(localStorage.getItem("five"));
}
sav5.addEventListener("click", saveFiveField);



function updateContent(){
  nineAM.innerHTML = localStorage.getItem("nine");
  tenAM.innerHTML = localStorage.getItem("ten");
  elevenAM.innerHTML = localStorage.getItem("eleven");
  twelvePM.innerHTML = localStorage.getItem("twelve");
  onePM.innerHTML = localStorage.getItem("one");
  twoPM.innerHTML = localStorage.getItem("two");
  threePM.innerHTML = localStorage.getItem("three");
  fourPM.innerHTML = localStorage.getItem("four");
  fivePM.innerHTML = localStorage.getItem("five");
}

const checkTimes = () => {
  var currentTime = moment().hour();
  if (currentTime >= 9 && currentTime < 10) {
    nineAM.style.background = "#ff6961";
  }
  else if (currentTime >= 10 && currentTime < 11) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#ff6961";
  }
  else if (currentTime >= 11 && currentTime < 12) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#d3d3d3";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#ff6961";
  }
  else if (currentTime >= 12 && currentTime < 13) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#d3d3d3";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#d3d3d3";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#ff6961";
  }
  else if (currentTime >= 13 && currentTime < 14) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#d3d3d3";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#d3d3d3";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#d3d3d3";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#ff6961";
  }
  else if (currentTime >= 14 && currentTime < 15) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#d3d3d3";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#d3d3d3";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#d3d3d3";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#d3d3d3";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "#ff6961";
  }
  else if (currentTime >= 15 && currentTime < 16) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#d3d3d3";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#d3d3d3";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#d3d3d3";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#d3d3d3";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "#d3d3d3";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "#ff6961";
  }
  else if (currentTime >= 16 && currentTime < 17) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#d3d3d3";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#d3d3d3";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#d3d3d3";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#d3d3d3";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "#d3d3d3";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "#d3d3d3";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "#ff6961";
  }
  else if (currentTime >= 17 && currentTime < 18) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#d3d3d3";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#d3d3d3";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#d3d3d3";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#d3d3d3";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "#d3d3d3";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "#d3d3d3";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "#d3d3d3";
    fourPM.setAttribute("readonly", true);
    fivePM.style.background = "#ff6961";
  }
  else if (currentTime >= 18) {
    nineAM.style.background = "#d3d3d3";
    nineAM.setAttribute("readonly", true);
    tenAM.style.background = "#d3d3d3";
    tenAM.setAttribute("readonly", true);
    elevenAM.style.background = "#d3d3d3";
    elevenAM.setAttribute("readonly", true);
    twelvePM.style.background = "#d3d3d3";
    twelvePM.setAttribute("readonly", true);
    onePM.style.background = "#d3d3d3";
    onePM.setAttribute("readonly", true);
    twoPM.style.background = "#d3d3d3";
    twoPM.setAttribute("readonly", true);
    threePM.style.background = "#d3d3d3";
    threePM.setAttribute("readonly", true);
    fourPM.style.background = "#d3d3d3";
    fourPM.setAttribute("readonly", true);
    fivePM.style.background = "#d3d3d3";
    fivePM.setAttribute("readonly", true);
  }
  
}


updateContent();
getDateAndTime();
checkTimes();