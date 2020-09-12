$(document).ready(function () {
// console.log("document loaded")

// Variable
let saveEvent = "";

// Time Block
$(".time-text").each(function(){
    let timeText = $(this).data("time");
    // console.log(timeText)
    
})

// Local Storage
$(".calendar-text").each(function (){
    // console.log($(this))
    let eleId = $(this).attr("id")
    // console.log(eleId)
    let localVal = localStorage.getItem(eleId)
    // console.log(localVal)
    if (localVal !== null){
        $(this).val(localVal)
    }
})

// console.log($(".calendar-text"))

// Event Listener for Calendar Event save button
$(".save-event").on("click", function(){
    // console.log("click")
    // Capture text-area input content
    saveEvent = $(this).parent().siblings(".calendar-event").children(".calendar-text").val();
    // console.log(saveEvent)
    let eleId = $(this).parent().siblings(".calendar-event").children(".calendar-text").attr("id");
    // console.log(eleId)
    localStorage.setItem(eleId, saveEvent)

})

$(".save-event").on("click", function(){
    location.reload();
})

})




// # 05 Third-Party APIs: Work Day Scheduler

// Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

// ## User Story

// ```
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

// The following animation demonstrates the application functionality:

// ![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

// ## Review

// You are required to submit the following for review:

// * The URL of the deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.