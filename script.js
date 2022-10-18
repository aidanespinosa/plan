// --------- COLOR COATS BOXES ACCORDING  TO TIME ---------

const hour = $(".hour"); //pulls hour class and sets it as variable
const task = $(".task"); // pulls task class and sets it as variable
const currentHour = moment().hour(); // use moments to set current hour
console.log(currentHour);
console.log(hour[1]);

for (let i = 0; i < hour.length; i++) {
  //loops through hour index
  if (hour[i].dataset.time < currentHour) {
    //if hour index < current hour
    task[i].style.backgroundColor = "yellow"; //set color to grey
  } else if (hour[i].dataset.time == currentHour) {
    //if hour index = hour
    task[i].style.backgroundColor = "green"; //set color to green
  } else if (hour[i].dataset.time > currentHour) {
    //if hour index > current hour
    task[i].style.backgroundColor = "red"; //set color to red
  }
  task[i].value = localStorage.getItem(`taskInput${i + 1}`);
}

// --------SAVES INPUT TO LOCAL STORAGE---------

const saveBtn = $(".saveBtn"); //set savBttn as variable = to button element
// const task = $(".task");

saveBtn.on("click", function () {
  // initialize click event on save button
  const myIndexInParent = $(this).attr("data-index"); //initialize variable corresponding to specific button index
  const myCorrespondingInput = $(".task[data-index=" + myIndexInParent + "]"); // relates task input index to button index
  localStorage.setItem(
    "taskInput" + myIndexInParent,
    myCorrespondingInput.val()
  ); //sets value of input in local storage
});

const time = document.querySelector("#currentDay");
time.style.fontSize = "40px";

setInterval(function () {
  time.textContent = moment().format("dddd, MMMM Do YYYY");
}, 100);
