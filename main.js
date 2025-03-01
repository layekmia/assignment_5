
const body = document.querySelector("body");
const taskCount = document.getElementById("taskCount");
const assignedCount = document.getElementById("assignedCount");
const date = document.getElementById("date");
const showActivity = document.getElementById("show-activity");

const discoverBtn = document.getElementById("discover");
const bgChangeBtn = document.getElementById("color-change");
const taskFinishedBtn = document.querySelectorAll(".finished-btn");
const clearHistoryBtn = document.getElementById("clearHistory");

// inital variables;
let totalTaskNumber = 23;
let assignNumber = 6;
let count = 0;

assignedCount.textContent = `0${assignNumber}`;
taskCount.textContent = totalTaskNumber;

// Clear activity
const clear = ()=> showActivity.innerHTML = "";
clear();

// Backgorund Color change function;
const colorChange = function () {
  let hexCode = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
  body.style.backgroundColor = hexCode;
};

bgChangeBtn.addEventListener("click", colorChange);

// Discover 
discoverBtn.addEventListener("click", () => (window.location = "./blog.html"));

// Dispaly current date
const currentDate = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
date.textContent = `${months[currentDate.getMonth()]} ${currentDate.getDate()} ${currentDate.getFullYear()}`;

// Disable button function;
const btnDisabled = (btn) => btn.classList.add('disabled')

// Task Finished button functionality
taskFinishedBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    alert("Board update Successfully");

    totalTaskNumber++;
    assignNumber--;
    count++;
    taskCount.textContent = totalTaskNumber;
    assignedCount.textContent = `0${assignNumber}`;

    btnDisabled(btn);

    if (count === taskFinishedBtn.length)
      alert("congrates!!! You have completed all the current task");

    // Find the heading
    const heading = e.target.closest(".card").querySelector("h2");

    const currentTime = new Date().toLocaleTimeString();
    const html = `
            <p class="bg-lightClr text-sm p-3 rounded-md text-black opacity-70 mb-4">
                You have Complete The Task <span class="font-semibold">${heading.textContent
                }</span> at ${currentTime}
            </p>
    `;
    showActivity.insertAdjacentHTML("afterbegin", html);
  });
});

// * clear history
clearHistoryBtn.addEventListener("click", clear);
