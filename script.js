const clock = document.getElementById('clock');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const ampmSpan = document.getElementById('ampm');
const formatToggle = document.getElementById('formatToggle');
const dateSpan = document.getElementById('date');

let is24HourFormat = false;

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  if (!is24HourFormat) {
    hours = hours % 12 || 12;
    ampmSpan.style.display = 'inline';
  } else {
    ampmSpan.style.display = 'none';
  }

  hoursSpan.textContent = String(hours).padStart(2, '0');
  minutesSpan.textContent = String(minutes).padStart(2, '0');
  secondsSpan.textContent = String(seconds).padStart(2, '0');
  ampmSpan.textContent = ampm;
}

function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);
  dateSpan.textContent = formattedDate; // Display formatted date
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  formatToggle.textContent = is24HourFormat
    ? 'Switch to 12-hour format'
    : 'Switch to 24-hour format';
}

setInterval(updateTime, 1000);

updateDate();

formatToggle.addEventListener('click', toggleFormat);

updateTime();
