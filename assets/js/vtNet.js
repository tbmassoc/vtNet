function vtNetPlayerAdjuster() {
  document.querySelector(".vtPlayer").style.height =
    `calc(100% - ${getComputedStyle(document.querySelector("header")).height})`;
}

function vtNetTimer() {
  // related code: https://www.w3schools.com/howto/howto_js_countdown.asp

  // Set the date we're counting down to
  var countDownDate = new Date("June 1, 2026 22:00:00 GMT+08:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.querySelector("header > p").innerHTML =
      `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector("header > p").innerHTML = "00:00:00:00";
    }
  }, 1000);
}
