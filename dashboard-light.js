// Input field
newTask = document.querySelector('.forms15');
newDate = document.querySelector('.forms18');

newNote = document.querySelector('.new-note');
newText = document.querySelector('.new-text');

// Output field
taskElement1 = document.querySelector('.new-task1');
dateElement1 = document.querySelector('.new-date1');
taskElement2 = document.querySelector('.new-task2');
dateElement2 = document.querySelector('.new-date2');
// typeElement1 = document.querySelector('.type1');
// typeElement2 = document.querySelector('.type2');
noteElement1 = document.querySelector('.note1');
textElement1 = document.querySelector('.text1');
noteElement2 = document.querySelector('.note2');
textElement2 = document.querySelector('.text2');
noteElement3 = document.querySelector('.note3');
textElement3 = document.querySelector('.text3');
noteElement4 = document.querySelector('.note4');
textElement4 = document.querySelector('.text4');

// Button
saveTask = document.querySelector('.buttons23');
saveNote = document.querySelector('.buttons230');

// // Accessing the dropdown element
// const dropdown = document.getElementById('dropdown');
// var type = "None";
// // Event listener for when the selection changes
// dropdown.addEventListener('change', function() {
//     // Get the selected value
//     const selectedOption = dropdown.value;

//     // Perform an action based on the selected value
//     switch (selectedOption) {
//     case 'work':
//         type = "Work";
//         break;
//     case 'personal':
//         type = "Personal";
//         break;
//     case 'school':
//         type = "School";
//         break;
//     default:
//         type = "None";
//         break;
//     }
// });

saveTask.addEventListener('click', function() {
    var taskValue = newTask.value;
    var dateValue = newDate.value;

    taskElement2.textContent = taskElement1.textContent;
    dateElement2.textContent = dateElement1.textContent;

    taskElement1.textContent = taskValue;
    dateElement1.textContent = dateValue;

    // typeElement2.textContent = typeElement1.textContent;
    // typeElement1.textContent = type;

    newTask.value = "";
    newDate.value = "";
});

saveNote.addEventListener('click', function() {
    var noteValue = newNote.value;
    var textValue = newText.value;

    noteElement4.textContent = noteElement3.textContent;
    textElement4.textContent = textElement3.textContent;

    noteElement3.textContent = noteElement2.textContent;
    textElement3.textContent = textElement2.textContent;

    noteElement2.textContent = noteElement1.textContent;
    textElement2.textContent = textElement1.textContent;

    noteElement1.textContent = noteValue;
    textElement1.textContent = textValue;

    newNote.value = "";
    newText.value = "";
});

// Rafay's Implementation
var frameButton4 = document.getElementById("frameButton4");
if (frameButton4) {
  frameButton4.addEventListener("click", function (e) {
    // smoothly animate to nex page
    document.body.style.opacity = 0;
    setTimeout(()=> {
      window.location.href = "./dashboard-dark.html";
    }, 500);
  });
}

// when I click min-wrapper2, I want to update the time in div16 to the value of the button "p4" into div16
  var timer = document.getElementById("timer");
  var minWrapper2 = document.getElementsByClassName("min-wrapper2");
  if (minWrapper2) {
    for (var i = 0; i < minWrapper2.length; i++) {
      minWrapper2[i].addEventListener("click", function (e) {
        var min = this.getElementsByClassName("p4")[0].innerHTML;
        document.getElementsByClassName("div16")[0].innerHTML = min + ":00";
        timer.innerHTML = `
          <img
            class="book-24-outline1"
            alt=""
            src="./public/notes--24--outline2.svg"
          />
          <div class="button23">Start</div>
        `;
      });
    }
    // and then if  button with id "timer" is clicked, I want to start the timer with the time in div16
    if (timer && document.getElementsByClassName("div16")[0].value != "00:00") {
      timer.addEventListener("click", function (e) {
        timer.innerHTML = `
        <img
          class="book-24-outline1"
          alt=""
          src="./public/notes--24--outline2.svg"
        />
        <div class="button23">Stop</div>
      `;
      
        timer.getElementsByClassName("button23")[0].addEventListener("click", function (e) {
          document.getElementsByClassName("div16")[0].innerHTML = "00:00";
          // stop timer
          clearInterval(interval);
          
          timer.innerHTML = `
          <img
            class="book-24-outline1"
            alt=""
            src="./public/notes--24--outline2.svg"
          />
          <div class="button23">Start</div>
        `;
          
        });

      
      var time = document.getElementsByClassName("div16")[0].innerHTML;
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
          document.getElementsByClassName("div16")[0].innerHTML =
            min + ":" + sec;
          totalSec--;
        }, 1000);
      });
    }
  }
  
