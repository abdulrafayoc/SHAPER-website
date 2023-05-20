// Get the button element
var button = document.querySelector('.buttons20');
var button1 = document.querySelector('.buttons200');
var button2 = document.querySelector('.rectangle-wrapper1');

// Get the input elements
var taskInput = document.querySelector('.forms8');
var tempInput = document.querySelector('.forms10');
var dateInput = document.querySelector('.forms11');
var note = document.querySelector('.forms12');
var text = document.querySelector('.forms14');

// Get the element containing the text and date to be replaced
var taskElement1 = document.querySelector('.taskkk1');
var dateElement1 = document.querySelector('.date1');

var taskElement2 = document.querySelector('.taskkk2');
var dateElement2 = document.querySelector('.date2');

var write_note = document.querySelector('.tag1');
var write_description = document.querySelector('.description1');
var write_note1 = document.querySelector('.tag2');
var write_description1 = document.querySelector('.description2');
var write_note2 = document.querySelector('.tag3');
var write_description2 = document.querySelector('.description3');
var write_note3 = document.querySelector('.tag4');
var write_description3 = document.querySelector('.description4');

taskElement2.textContent = 'Respond to emails';
dateElement1.textContent = '23 May 2021';

// Listen for a click event on the button
button.addEventListener('click', function() {
  // Get the values entered in the input boxes
  var newTask = taskInput.value;
  var newDate = dateInput.value;

  taskElement2.textContent = taskElement1.textContent;
  dateElement2.textContent = dateElement1.textContent;
  
  // Update the text content of the task and date elements with the new values
  taskElement1.textContent = newTask;
  dateElement1.textContent = newDate;

    // Clear the input boxes
    taskInput.value = '';
    dateInput.value = '';
    tempInput.value = '';
});

button1.addEventListener('click', function() {
  var newNote = note.value;
  var newText = text.value;

  write_note3.textContent = write_note2.textContent;
  write_description3.textContent = write_description2.textContent;

  write_note2.textContent = write_note1.textContent;
  write_description2.textContent = write_description1.textContent;

  write_note1.textContent = write_note.textContent;
  write_description1.textContent = write_description.textContent;

  write_description.textContent = newText;
  write_note.textContent = newNote;

  note.value = '';
  text.value = '';
});

button2.addEventListener('click', function() {

  window.location.href = "./dashboard-light.html";

});


/////////////////////////////////////////////////////////////////////////
// rafay implementaion

var frameButton4 = document.getElementById("frameButton4");
if (frameButton4) {
  frameButton4.addEventListener("click", function (e) {
    // smoothly animate to nex page
    document.body.style.opacity = 0;
    setTimeout(()=> {
      window.location.href = "./dashboard-light.html";
    }, 500);
  });
}

// when I click min-wrapper2, I want to update the time in div16 to the value of the button "p4" into div16
var timer = document.getElementById("timer");
var minWrapper = document.getElementsByClassName("min-wrapper");
if (minWrapper) {
  for (var i = 0; i < minWrapper.length; i++) {
    minWrapper[i].addEventListener("click", function (e) {
      var min = this.getElementsByClassName("p")[0].innerHTML;
      document.getElementsByClassName("div3")[0].innerHTML = min + ":00";
      timer.innerHTML = `
        <img
          class="book-24-outline"
          alt=""
          src="./public/notes--24--outline1.svg"
        />
        <div class="button20">Start</div>
      `;
    });
  }
// and then if  button with id "timer" is clicked, I want to start the timer with the time in div16
if (timer && document.getElementsByClassName("div3")[0].value != "00:00") {
  timer.addEventListener("click", function (e) {
    timer.innerHTML = `
    <img
      class="book-24-outline"
      alt=""
      src="./public/notes--24--outline1.svg"
    />
    <div class="button20">Stop</div>
    `;
  
  timer.getElementsByClassName("button20")[0].addEventListener("click", function (e) {
    document.getElementsByClassName("div3")[0].innerHTML = "00:00";
    // stop timer
    clearInterval(interval);
    
    timer.innerHTML = `
    <img
      class="book-24-outline"
      alt=""
      src="./public/notes--24--outline1.svg"
    />
    <div class="button20">Start</div>
  `;
    });
   
    var time = document.getElementsByClassName("div3")[0].innerHTML;
      var timeArr = time.split(":");
      var min = parseInt(timeArr[0]);
      var sec = parseInt(timeArr[1]);
      var totalSec = min * 60 + sec;
      var interval = setInterval(function () {
        if (totalSec == 0) {
          clearInterval(interval);
        }
        var min = Math.floor(totalSec / 60);
        var sec = totalSec % 60;
        document.getElementsByClassName("div3")[0].innerHTML = min + ":" + sec;
        totalSec--;
      }, 1000);
    });
  }
}
      