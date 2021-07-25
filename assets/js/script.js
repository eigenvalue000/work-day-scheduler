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

    // This uses the on function from jQuery to make the saveButton
    // execute the anonymous function on the click of the button
    $('#saveButton').on('click', function() {
        // taskTime is assigned the value of the id that is
        // the parent of the saveButton, which will be the id
        // of the container, ie id="hourXX" where XX will be
        // the corresponding hour
        var taskTime = $(this).parent().attr('id');
        // taskDescription is assigned the value of the saveButton's 
        // siblings, namely the element with the description class.
        var taskDescription = $(this).siblings('.description').val();
        // The taskTime is stored to localstorage as the key
        // and the taskDescription is stored to localStorage as
        // value. setTime(key, value)
        localStorage.setItem(taskTime, taskDescription);
    });

    // Here, the hourXX id and textArea description class are
    // referenced by jQuery to write the value of the
    // item in localStorage that has the key hourXX to the hourXX
    // description in the HTML. This results in the page always
    // displaying the user's saved task even if the page is reloaded.
    $('#hour08 .description').val(localStorage.getItem('hour08'));

});





