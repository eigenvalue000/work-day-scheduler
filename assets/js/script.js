// Needed DOM elements
var timeDisplayEl = $('#currentDay');

// Function that displays the current date
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

// Load the full document first, then run jQuery code
$(function() {
    setInterval(displayTime, 1000);
});





