$(document).ready(function () {
  // console.log("document loaded")

  //Renders current day and time in header   
  $("#currentDay").text(moment().format("MMMM Do YYYY, H:mm"));

  // Variables
  let saveEvent = "";

  let currentTime = moment().hour();

  // Time Block 
  $(".time-text").each(function () {
    let timeText = $(this).data("time");
    // console.log(timeText)
  });

  // Local Storage
  $(".calendar-text").each(function () {
    // console.log($(this))
    let eleId = $(this).attr("id");
    // console.log(eleId)
    let localVal = localStorage.getItem(eleId);
    // console.log(localVal)
    if (localVal !== null) {
      $(this).val(localVal);
    }

    currentTime = moment().hour();
    // console.log(currentTime)
    let timeBlock = $(this).attr("data-hour");
    if (timeBlock > currentTime) {
      $(this).addClass("future");
    } else if (timeBlock < currentTime) {
      $(this).addClass("past");
    } else if (timeBlock == currentTime) {
      $(this).addClass("present");
    }
  });

  // console.log($(".calendar-text"))

  // Event Listener for Calendar Event save button
  $(".save-event").on("click", function () {
    // console.log("click")
    // Capture text-area input content
    saveEvent = $(this)
      .parent()
      .siblings(".calendar-event")
      .children(".calendar-text")
      .val();
    // console.log(saveEvent)
    let eleId = $(this)
      .parent()
      .siblings(".calendar-event")
      .children(".calendar-text")
      .attr("id");
    // console.log(eleId)
    localStorage.setItem(eleId, saveEvent);
  });

  $(".save-event").on("click", function () {
    location.reload();
  });
});