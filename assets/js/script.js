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
    $('.saveBtn').on('click', function() {
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
    $('#hour09 .description').val(localStorage.getItem('hour09'));
    // This function gets the current hour. This function returns a number
    // that will be used to check if a task is past the due date.
    function trackHour() {
        var currentHour = moment().hour();
        return currentHour;
    }

    function compareHour(hourNum) {
        $('.time-block').each(function() {
            // First, get the corresponding time block element.
            var timeBlockEl = $(this);
            // Next, choose the 0th element of the timeBlockEl object. Then
            // choose the 0th child of the timeBlockEl which is the div tag
            // with class="hour". Get the text from within that tag's body
            // and trim the whitespace and split the string by the ':' delimiter.
            // Take the 0th element of the resulting array, which will be the
            // string version of the current hour. Use parseInt to turn this resulting
            // string into a useable number for comparison.
            var timeBlockNum = parseInt(timeBlockEl[0].children[0].textContent.trim().split(':')[0]);
            
            // Now, implement the logic of the function. 
            if (timeBlockNum < hourNum) {
                // If the timeBlockNum is less than the current
                // hour hourNum, then color the time block grey.
                // Color the time block grey by adding the 'past' class
                $(this).addClass('past');
                // Clean up other time block colorings
                $(this).removeClass('present');
                $(this).removeClass('future');
                
            } else if (timeBlockNum === hourNum) {
                // If the timeBlockNum is equal to the current
                // hour hourNum, then color the time block red.
                // Color the time block red by adding the 'present' class
                $(this).addClass('present');
                // Clean up other time block colorings
                $(this).removeClass('past');
                $(this).removeClass('future');
            } else {
                // If the timeBlockNum is greater than the current
                // hour hourNum, then color the time block green.
                // Color the time block green by adding the 'future' class
                $(this).addClass('future');
                //Clean up other time block colorings
                $(this).removeClass('past');
                $(this).removeClass('present');
                
            }
        });
    }
   
    // Run the compareHour function with the trackHour function as
    // the input.
    compareHour(trackHour());
    
});





