// Set the target date for the countdown
const targetDate = new Date('2023-06-01');

// Update the countdown every second
function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  // Calculate remaining time in days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the remaining time in the HTML elements
  document.getElementById('days').textContent = formatTime(days);
  document.getElementById('hours').textContent = formatTime(hours);
  document.getElementById('minutes').textContent = formatTime(minutes);
  document.getElementById('seconds').textContent = formatTime(seconds);
}

// Format time values to always have two digits (e.g., 01, 02, ..., 10, 11, ...)
function formatTime(time) {
  return time < 10 ? time : time;
}

// Initial call to update the countdown
updateCountdown();

// Start updating the countdown every second
setInterval(updateCountdown, 1000);

// Navbar
function toggle() {
  var content = document.getElementById("navbarNav");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// Upload Image
function upload() {
  var imgcanvas = document.getElementById("canv1");
  var fileinput = document.getElementById("finput");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
